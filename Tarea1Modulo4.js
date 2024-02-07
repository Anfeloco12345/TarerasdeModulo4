//Tarea 1 Asincronismo A.Lozano

/*
                2   4       7 
            1           6      9
                3   5       8

tiempo:     0   2   2   5   3  4

*/

function ExecuteAction(number, time){
    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log(number)
            resolve("resolved")
        },time)
    }
    )
}
async function getDataNumber (){
    console.log(1)
    
    await Promise.all([ExecuteAction(2,2000),ExecuteAction(3,2000)])
    await Promise.all([ExecuteAction(4,2000),ExecuteAction(5,2000)])
    await ExecuteAction(6,5000)
    await Promise.all([ExecuteAction(7,3000),ExecuteAction(8,3000)])
    await ExecuteAction(9,4000)

}
getDataNumber ()
