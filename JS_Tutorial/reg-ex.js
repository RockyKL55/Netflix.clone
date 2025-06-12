let str1 = `He also praised Deputy Chief Minister DK Shivakumar for successfully proposing the inclusion of Ramanagara into Bengaluru South district.
           “The government has already approved and issued an order for this. Once an area is named Bengaluru South, its profile changes.
           A similar approach is being considered for Tumakuru,” he said.

           Separately, on Monday, Parameshwara informed that he has approached Union Highways Minister Nitin Gadkari nithingadkari@gmail.com 94486 60746 for permission
           to construct a ‘Welcome’ arch on the National Highway in Tumakuru. He said ₹ 5 crore has been
            allocated from the Smart City project for the arch, which will be built near Sadashivanagar in Tumakuru district.`

let out = str1.match(/\w/gim)
console.log(out);




// \d = matches digit
// \w = matches any wordcharacter
// \s = matches space
// \. = matches any character
// \^ = matches the start
// \$ = matches the end String
// \[] = matches any one of the character enclosed in the bracket
// g = matches all occurences of the pattern
// i = ignores case sensitivity
// m = matches the begining or end of each line