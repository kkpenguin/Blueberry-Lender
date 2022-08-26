pragma solidity ^0.5.16;

import "./BCollateralCapErc20CheckRepay.sol";

/**
 * @title Cream's CCollateralCapErc20CheckRepayDelegate Contract
 * @notice BTokens which wrap an EIP-20 underlying and are delegated to
 * @author Cream
 */
contract BCollateralCapErc20CheckRepayDelegate is BCollateralCapErc20CheckRepay {
    /**
     * @notice Construct an empty delegate
     */
    constructor() public {}

    /**
     * @notice Called by the delegator on a delegate to initialize it for duty
     * @param data The encoded bytes data for any initialization
     */
    function _becomeImplementation(bytes memory data) public {
        // Shh -- currently unused
        data;

        // Shh -- we don't ever want this hook to be marked pure
        if (false) {
            implementation = address(0);
        }

        require(msg.sender == admin, "admin only");

        // Set internal cash when becoming implementation
        internalCash = getCashOnChain();

        // Set BToken version in comptroller
        ComptrollerInterfaceExtension(address(comptroller)).updateBTokenVersion(
            address(this),
            ComptrollerV1Storage.Version.COLLATERALCAP
        );
    }

    /**
     * @notice Called by the delegator on a delegate to forfeit its responsibility
     */
    function _resignImplementation() public {
        // Shh -- we don't ever want this hook to be marked pure
        if (false) {
            implementation = address(0);
        }

        require(msg.sender == admin, "admin only");
    }
}