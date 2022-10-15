var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://clipground.com/images/grandfather-clipart-6.jpg","https://clipground.com/images/grandmother-clipart-4.jpg", "https://th.bing.com/th/id/OIP.r1Y-Sx83pN-nEckxzicUIAHaKL?pid=ImgDet&rs=1" , "https://www.pngitem.com/pimgs/m/2-21460_clip-art-mother-son-clipart-clipart-mother-and.png",  "https://th.bing.com/th/id/OIP.YSy3PUKEsJFTDvbdoJkwIQHaPr?pid=ImgDet&rs=1"];

var names =["Family Book","Chandra Shekhar Upreti - Grandfather", "Chandra Upreti - Grandmother", "Bhuwan Chandra - Father", "Suneeta Upreti - Mother",  "Chirag Upreti - Brother"  ];

var age = [68,58,40,32,9]

age.sort();

age.reverse();   

var i = 0;

function update()
{
    i++

    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    
    var updatedImage = images[i];

    var updatedName  = names[i];
    
    var updatedAge = age[i]

    document.getElementById("family_member_image").src = updatedImage;
    
    document.getElementById("family_member_name").innerHTML = updatedName;

    document.getElementById("family_member_age").innerHTML = updatedAge;

    var max_number = Math.max.apply(Math, age);
    console.log("The highest age is: ", max_number);

    var min_number = Math.min.apply(Math, age );
    console.log("The lowest age is: ", min_number);
}