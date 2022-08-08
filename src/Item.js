class Item{
   name;
   imgSrc;
   tags;
   season;
   notes;

   constructor(name, imgSrc, tags=[], season="All", notes=""){
       this.name = name;
       this.tags = tags;
       this.season = season;
       this.notes = notes;
       this.imgSrc = imgSrc;
   }

}

class ClosetItem extends Item{
    brand;
    size
    price;

    constructor(name, imgSrc, tags=[], season="All", notes="", brand="", size="", price=""){
        super(name, imgSrc, tags, season, notes);
        this.brand = brand;
        this.size = size;
        this.price = price;
    }
}

class LookItem extends Item{
    constructor(name, imgSrc, tags=[], season="All", notes=""){
        super(name, imgSrc, tags, season, notes);
    }
}

export {ClosetItem, LookItem};