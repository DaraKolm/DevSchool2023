/*
My codewars: https://www.codewars.com/users/DaraKolm
Github: https://github.com/DaraKolm/DevSchool2023*/
/*Task 4 PaginationHelper
https://www.codewars.com/kata/515bb423de843ea99400000a
 */
class PaginationHelper{
    arr = [];
    itemsPerPage;

    constructor(arr, i) {
        this.arr=Array.from(arr);
        this.itemsPerPage=i;
    }

    // returns the number of pages
    pageCount(){
        return Math.ceil(this.arr.length/this.itemsPerPage);
    }

    // returns the number of items within the entire collection
    itemCount(){
        return this.arr.length;
    }

    // returns the number of items on the current page
    pageItemCount(pageIndex){
        if(pageIndex>=this.pageCount() || pageIndex<0) return -1;
        else{
            if(pageIndex===this.pageCount()-1 && this.arr.length%this.itemsPerPage!==0) return this.arr.length%this.itemsPerPage;
            else return this.itemsPerPage;
        }
    }

    // determines what page an item is on. Zero based indexes
    pageIndex(itemIndex) {
        if(itemIndex>=this.itemCount() || itemIndex<0) return -1;
        else{
            if((itemIndex+1)%this.itemsPerPage===0) return ((itemIndex+1)/this.itemsPerPage)-1;
            else return Math.floor((itemIndex+1)/this.itemsPerPage);
            /*let page = 0;
            while(itemIndex+1>this.itemsPerPage) {
                page++;
                itemIndex = itemIndex - this.itemsPerPage;
            }
            return page;*/
        }
    }
}

let helper = new PaginationHelper(['a','b','c','d','e','f'], 4);

console.log(helper.pageCount()); // should == 2
console.log(helper.itemCount()); // should == 6
console.log(helper.pageItemCount(0));// should == 4
console.log(helper.pageItemCount(1));// last page - should == 2
console.log(helper.pageItemCount(2));// should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5));// should == 1 (zero based index)
console.log(helper.pageIndex(2)); // should == 0
console.log(helper.pageIndex(20)); // should == -1
console.log(helper.pageIndex(-10)); // should == -1