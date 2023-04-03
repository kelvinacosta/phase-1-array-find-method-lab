// code your solution here
function superbowlWin(record){
    const myRecord = record.find(game => game.result==='W')
    if(myRecord){
        return myRecord.year
    }
    
}