// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0 ;



contract  Milk{

    struct Data{
        string name;
        string message;
        uint timestamp ;
        address from; 
    }

    Data[] data;

address payable owner;

constructor(){
    owner =  payable (msg.sender);
}

function buyMilk(string memory name , string memory message) external payable   {

    require(msg.value>1,"Please pay more than 11 ether");
    owner.transfer(msg.value);
    data.push(Data(name,message,block.timestamp,msg.sender));

}

function getData() public view returns(Data[] memory) {
    return data;

}




}