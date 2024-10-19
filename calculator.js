const hienthi = document.getElementById("hienthi")
const ketqua = document.getElementById("ketqua")


function changeinput(input){
        hienthi.value += input
        ketqua.value = ""
}

function calculate(){
    try{
        ketqua.value = eval(hienthi.value)
    }
    catch(error){
        hienthi.value = "Error"
        ketqua.value = "Error"
    }
}

function delete1(){
    hienthi.value = hienthi.value.slice(0, -1)
    ketqua.value = ""
}

function deleteall(){
    hienthi.value = ""
    ketqua.value = ""
}
