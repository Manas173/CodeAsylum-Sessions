var exp = "";
var operand = [];
var operator = [];
document.getElementById("ip1").value = "";

function func(a){
    console.log(a.id);
    exp = document.getElementById("ip1").value;
    exp = exp + a;
    document.getElementById("ip1").value = exp;
}

function updateval(){
    var id="";
    while(operator.length > 0)
    {
    for(var i=0;i<4;i++)
    {
        if(i==0)
            id='/';
        if(i==1)
            id='*';
        if(i==2)
            id='+';
        if(i==3)
            id='-';

        for(var j=0;j<operator.length;j++)
        {
            if(operator[j] == id)
            {
                var leftval = Number(operand[j]);
                var rightval = Number(operand[j+1]);
                var ans;
                if(id == '/')
                    ans = leftval/rightval;
                if(id == '*')
                    ans = leftval*rightval;
                if(id == '+')
                    ans = leftval+rightval;
                if(id == '-')
                    ans = leftval-rightval;

                operator.splice(j,1);
                operand.splice(j,2,ans);
            }
        }
    }
    }

    document.getElementById('ip1').value = ans;
    operand = [];
    operator = [];
}

function eval(){
    exp = document.getElementById("ip1").value;
    var val = "";

    for(var i=0;i<exp.length;i++)
    {
        if(exp[i] == '+' || exp[i] == '-' || exp[i] == '/' || exp[i] == '*')
        {
            operand.push(val);
            operator.push(exp[i]);
            val = "";
        }
        else
            val = val + exp[i];
    }

    if(val != '')
        operand.push(val);

    console.log(operand);
    console.log(operator);

    updateval();
}