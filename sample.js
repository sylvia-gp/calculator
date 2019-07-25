//establish entries starting as nil (array)
//establish total as starting at 0 

//establish temp variable as empty (current button value)
    //When a button is clicked, the 'value' of the button is assigned to val

        //if button value is a number or button value is a '.', add value to temp variable and print to screen
            //else if button pressed is 'AC', reset calculator (clear entries, temp, total and val)
            //else if button pressed is 'CE', clear last entry (clear temp and val)
            //else if button pressed is x, push temp value to entries and add a * , reset temp value
            //else if button pressed is divide symbol, push temp to entries, add / and reset temp value
        
            //else if button pressed is equal sign, push temp value into entries

                //establish nt is number value of first number in entries
                //establish for loop spanning entries array - [i] value starts at 1
                //establish nextNum is value of entries[i+1]
                //establish symbol is entries [i]
                
                    //if symbol is +, add nt and next numbers
                    //if symbol is -, take away next nums from first num
                    //if symbol is *, multiply nums
                    //if symbol is /, divide nums
            
                //if result is less than 0, add a - to front of returned number
            
            //return total value, print to screen and clear entries and temp variables

    //otherwise push temp and val to entries, reset temp