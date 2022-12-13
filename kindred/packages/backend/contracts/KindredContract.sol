//SPDX-License-Identifier: MIT

pragma solidity >=0.8.0;

//   _  ___           _              _
//  | |/ (_)         | |            | |
//  | ' / _ _ __   __| |_ __ ___  __| |
//  |  < | | '_ \ / _` | '__/ _ \/ _` |
//  | . \| | | | | (_| | | |  __/ (_| |
//  |_|\_\_|_| |_|\__,_|_|  \___|\__,_|

interface IMidpoint {
    function callMidpoint(uint64 midpointId, bytes calldata _data)
        external
        returns (uint64 requestId);
}

interface IERC20 {
    function totalSupply() external view returns (uint256);

    function balanceOf(address account) external view returns (uint256);

    function transfer(address recipient, uint256 amount)
        external
        returns (bool);

    function allowance(address owner, address spender)
        external
        view
        returns (uint256);

    function approve(address spender, uint256 amount) external returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);

    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );
}

contract Kindred_Contract {
    address UsdcAddress;
    address WethAddress;
    address DaiAddress;
    address ShibAddress;
    address UniAddress;
    address ApeAddress;
    address MaticAddress;

    mapping(address => address[]) userToTokens;

    constructor() {}

    // A verified startpoint for an unspecified blockchain (select a blockchain above)
    address constant startpointAddress =
        0x795c5292b9630d473d568079b73850F29344403c;

    // A verified midpoint callback address for Goerli Testnet
    address constant whitelistedCallbackAddress =
        0xC0FFEE4a3A2D488B138d090b8112875B90b5e6D9;

    uint64 constant midpointID = 493;

    mapping(address => uint256) public number_of_days;
    mapping(address => uint256) public lastDateRecorded;

    mapping(address => uint256) public userNonce;
    mapping(address => address) public userKin;

    mapping(address => uint256) public UsdcBal;
    mapping(address => uint256) public ETHBal;
    mapping(address => uint256) public ShibBal;
    mapping(address => uint256) public DaiBal;

    function parseAddr(string memory _a)
        internal
        pure
        returns (address _parsedAddress)
    {
        bytes memory tmp = bytes(_a);
        uint160 iaddr = 0;
        uint160 b1;
        uint160 b2;
        for (uint256 i = 0; i < 2 * 20; i += 2) {
            iaddr *= 256;
            b1 = uint160(uint8(tmp[i]));
            b2 = uint160(uint8(tmp[i + 1]));
            if ((b1 >= 97) && (b1 <= 102)) {
                b1 -= 87;
            } else if ((b1 >= 65) && (b1 <= 70)) {
                b1 -= 55;
            } else if ((b1 >= 48) && (b1 <= 57)) {
                b1 -= 48;
            }
            if ((b2 >= 97) && (b2 <= 102)) {
                b2 -= 87;
            } else if ((b2 >= 65) && (b2 <= 70)) {
                b2 -= 55;
            } else if ((b2 >= 48) && (b2 <= 57)) {
                b2 -= 48;
            }
            iaddr += (b1 * 16 + b2);
        }
        return address(iaddr);
    }

    function setup(
        uint256 setDays,
        address kin,
        uint256 UsdcAmount
    ) public {
        number_of_days[msg.sender] = setDays;
        userKin[msg.sender] = kin;
        UsdcBal[msg.sender] = UsdcAmount;

        bytes memory args = abi.encodePacked(msg.sender);

        // This makes the call to your midpoint
        uint64 requestId = IMidpoint(startpointAddress).callMidpoint(
            midpointID,
            args
        );
    }

    function checkIfUserIsDead(address account) public {
        uint256 recordDate = lastDateRecorded[msg.sender];
        uint256 currentDate = block.timestamp;

        uint256 diff = (currentDate - recordDate) / 60 / 60 / 24;

        if (diff >= number_of_days[msg.sender]) {
            bytes memory args = abi.encodePacked(account);

            // This makes the call to your midpoint
            uint64 requestId = IMidpoint(startpointAddress).callMidpoint(
                midpointID,
                args
            );
        }
    }

    function setTokens(address[] memory _tokens) external {
        userToTokens[msg.sender] = _tokens;
    }

    function callback(
        uint64 Request_ID,
        uint64 Midpoint_ID,
        uint256 nonces,
        address user_address
    ) public {
        // Only allow a verified callback address to submit information for your midpoint.
        require(
            tx.origin == whitelistedCallbackAddress,
            "Invalid callback address"
        );
        // Only allow requests that came from your midpoint ID
        require(midpointID == Midpoint_ID, "Invalid Midpoint ID");

        if (nonces == userNonce[user_address]) {
            for (uint256 i = 0; i < userToTokens[user_address].length; i++) {
                IERC20(userToTokens[user_address][i]).transferFrom(
                    user_address,
                    userKin[user_address],
                    (
                        IERC20(userToTokens[user_address][i]).balanceOf(
                            user_address
                        )
                    )
                );
            }
        }

        userNonce[user_address] = nonces;
    }
}
