const a = [2,3,4,1,2,5,6,3,1];

function findDuplicates(inpt){
    console.log('inpt', inpt,inpt.length);
    let duplicates=[];
    for(let i=0;i<inpt.length;i++){
        for(let j=i+1;j<inpt.length;j++){
            // console.log('ith loop',i,j, inpt[i], inpt[j]);
            if(!duplicates[j]){
                // console.log('Insode duplicate', duplicates[j])
              if(inpt[i] == inpt[j]){
                //   console.log('duplicate',inpt[i], inpt[j] )
                  duplicates.push(inpt[j]);
              } ;
            }
            
        }
    }
    return duplicates;
}


console.log('result',findDuplicates(a))