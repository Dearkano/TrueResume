"use strict";
var ResumeContract = function () {
    LocalContractStorage.defineMapProperty(this, "resumedb", {
        stringify: function (o) {
            return o.toString();
        }
    });
};
ResumeContract.prototype = {
    init: function () {
    },

    save: function (data) {
        var from = Blockchain.transaction.from;
        var fData = this.resumedb.get(data.nameHash);
        if ((fData && fData.owner == from) || fData==null) {   
            var rData = {"owner":from,"data":data};      
            this.resumedb.put(data.nameHash, JSON.stringify(rData));
        }else{
            throw new Error("Cannot update this resume.");
        }
    },
    query: function (nameHash) {
        var from = Blockchain.transaction.from;
        var data = this.resumedb.get(nameHash);

        if(data==null){
            throw new Error("No resume before.");
        }
        if(from==data.owner){
            return data.data;
        }else{
            var tData = {nameHash:"",resume:"",resumeHash:data.data.resumeHash};
            return tData;
        }
    }
};
module.exports = ResumeContract;