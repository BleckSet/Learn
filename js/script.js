// $(document).ready(function() {
//   $(window).scroll(function(event) {
//     var s =$(this).scrollTop();
//     var w =$(this).outerWidth();
//     var h =$('.content').outerHeight();
//     var h_b =$('.paralax').outerHeight();
//     var p = s/h*100;
//     var p_b = s/h_b*100;
//     var o = 1-1/100*p_b;
//     var z_1= 1+(w/10000*p_b);
//     $('.paralax__fog').css('transform','scale('+z_1+')');
//     $('.paralax__fog').css('opacity',o);
//     var z_2= 1+(w/5000000*p);
//         $('.paralax__motain1').css('transform','scale('+z_2+')');
//           var hr= w/2000*p_b;
//           var z_3= 1+(w*0.000003*p_b);
//           $('.paralax__motain2').css('transform','scale('+z_3+')');
//           $('.paralax__motain3').css('transform','scale('+z_3+')');


  


let incr = 10,
    decr = 10;

    // ++incr;
    // --decr;
    console.log(incr++);
    console.log(decr--);

console.log(5%2);