let names= new Array();
names [0]="Yaakov";
names [1]="John";
names [2]="Jean";
names [3]="joe";
names [4]="Ade";
names [5]="Bose";
names [6]="Lola";
names [7]="Alexandra";
names [8]="jim";


for (let i = 0; i< names.length; i++) {
    if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
    }
    else{
        console.log("Hello "+ names[i])
    }
};