// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

contract TemplateRegistry is Ownable {
    string[] public templates;
    mapping(string => uint256) public templateScores;
    uint minfee = 0.5 ether;

    function addTemplate(string memory _templateCID) public onlyOwner {
        templates.push(_templateCID);
    }

    function getTemplate(uint256 _index) public view returns (string memory) {
        return templates[_index];
    }

    function numberOfTemplates() public view returns (uint256) {
        return templates.length;
    }

    function getIndexOfTemplate(string memory _templateCID)
        public
        view
        returns (uint256)
    {
        for (uint256 i = 0; i < templates.length; i++) {
            if (
                keccak256(bytes(templates[i])) == keccak256(bytes(_templateCID))
            ) {
                return i;
            }
        }
        revert("Template not found");
    }

    function removeTemplate(uint256 _templateIndex) public onlyOwner {
        if (_templateIndex >= templates.length) return;

        for (uint256 i = _templateIndex; i < templates.length - 1; i++) {
            templates[i] = templates[i + 1];
        }
        templates.pop();
    }

    function upvoteTemplate(string memory _templateCID) public payable {
        require(
            msg.value >= minfee,
            "You must pay at least the minimum fee to upvote"
        );
        templateScores[_templateCID] += msg.value;
    }

    function downvoteTemplate(string memory _templateCID) public payable {
        require(
            msg.value >= minfee,
            "You must pay at least the minimum fee to downvote"
        );
        templateScores[_templateCID] += msg.value;
    }
}
