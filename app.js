function calculate(aminoAcids,proteins)
{
    //1 /40
    // 635 * 20 * 2
    var statisticForAllProteins = calculator.pow((parseInt(proteins) * 20 * 2).toString(),aminoAcids.toString());
    return statisticForAllProteins;
}

var calculator = {
    sum: function (num1, num2) {
        var counter1 = num1.length - 1, counter2 = num2.length - 1, kalan = 0;
        var response = "";
        while (true) {
            var num1Val = 0, num2Val = 0;
            if (counter1 >= 0)
                num1Val = parseInt(num1[counter1]);
            if (counter2 >= 0)
                num2Val = parseInt(num2[counter2]);
            var toplam = num1Val + num2Val + kalan;
            if (toplam < 10) {
                response = toplam + response;
                kalan = 0;
            } else {
                kalan = 1;
                response = (toplam % 10) + response;
            }
            counter1--;
            counter2--;
            if (counter1 < 0 && counter2 < 0)
                break;
        }
        if (kalan > 0)
            response = kalan + response;
        return response;

    },
    multiply: function (num1, num2) {
        if (num1 == "0" || num2 == "0")
            return "0";
        var response = "0";
        for (var i = num2.length - 1; i >= 0; i--) {
            var num2Val = parseInt(num2[i]);
            var residual = 0;
            var multiply = "";
            for (var j = num1.length - 1; j >= 0; j--) {
                var num1Val = parseInt(num1[j]);
                var result = (num2Val * num1Val + residual).toString();
                if (result.length == 1) {
                    multiply = result[0] + multiply;
                    residual = 0;
                }
                else {
                    residual = parseInt(result[0]);
                    multiply = result[1] + multiply;
                }
            }
            if (residual != 0)
                multiply = residual + multiply;
            for (var zeros = 0; zeros < num2.length - (i + 1); zeros++) {
                multiply += "0";
            }
            response = calculator.sum(response, multiply);
        }
        //remove zeros from left
        while (true) {
            if (response[0] == '0') {
                response = response.substring(1);
            } else {
                break;
            }
        }
        return response;
    },
    pow: function(x,y){
        var yVal = parseInt(y);
        var res = x;
        for(var i =0;i<yVal;i++)
            res = calculator.multiply(res,x);
        return res;
    }
};