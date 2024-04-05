import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllTags(): Tag[]{
    return[
        {name: 'Dog', count: 22},
        {name: 'Cat', count: 20},
        {name: 'Adult Cat', count: 9},
        {name: 'Adult Dog', count: 8},
        {name: 'Puppy', count: 9},
        {name: 'Kitten', count: 3},
        {name: 'Large-breed', count: 3},
        {name: 'Small-breed', count: 2},
        {name: 'Mother-cat', count: 1},
        {name: 'Baby-cat', count: 1},
        {name: 'Mother-Dog', count: 1},
        {name: 'Dry', count: 18},
        {name: 'Non-veg', count: 6},
        {name: 'Sardine', count: 1},
        {name: 'Mackerel', count: 1},
        {name: 'Fish', count: 8},
        {name: 'Grainfree', count: 10},
        {name: 'Treat', count: 3},
        {name: 'Wet', count: 8},
        {name: 'Chicken', count: 17},
        {name: 'Egg', count: 4},
        {name: 'Starter', count: 5},
        {name: 'Grain', count: 1},
        {name: 'Meat', count: 1},
        {name: 'Brown-Rice', count: 1},
        {name: 'Gravy', count: 7},
        {name: 'Lamb', count: 2},
        {name: 'Pumpkin', count: 2},
        {name: 'Tuna', count: 6},
        {name: 'Salmon', count: 1},
        {name: 'Lobster', count: 1},
        {name: 'Vegan', count: 2},
        {name: 'Turkey', count: 1},
        {name: 'Vegetables', count: 5},
        {name: 'Liver', count: 1},
        {name: 'Milk', count: 1},
        {name: 'Carrot', count: 3},
        {name: 'Canned', count: 1},
        {name: 'Jelly', count: 1},
        {name: 'Seafood', count: 1},
        {name: 'Potato', count: 1}
    ]
  }

  getAllFoodsByTag(tag: string):Food[]{
    return tag == "All" ?
        this.getAll() :
        this.getAll().filter(food => food.tags?.includes(tag));
  }

  getFoodById(id: string):Food {
    return this.getAll().find(food => food.id === parseInt(id))!;
  }
  
  getAll():Food[]{
    return[
      {
        id: 1,
        name: 'Acana Large Breed Dry Puppy Food',
        oldPrice: 117.58,
        newPrice: 110.11,
        discount: 7.57,
        tags: ['Dry', 'Non-veg','Dog','Puppy','Large-breed'],
        favorite: false,
        stars: 4.97,
        imageUrl: '../../../assets/Images/PetFoods/PetFood1.webp',
        petType: ['Dog','Puppy','Large-breed'],
        petSymbol: [ '🐶 🐕‍🦺'],
        foodSymbol: ['🍖🥩🍪'],
        description: 'High protein, grain-free, easy to digest dog food'
    },
    
    {
        id: 2,
        name: 'Signature Grain Zero Adult Dry Cat Food',
        oldPrice: 20.63,
        newPrice: 18.67,
        discount: 1.96,
        tags: ['Sardine', 'Mackerel', 'Fish', 'Dry', 'Grainfree', 'Cat', 'Adult Cat'],
        favorite: false,
        stars: 4.67,
        imageUrl: '../../../assets/Images/PetFoods/PetFood2.webp',
        petType: ['Cat', 'Adult Cat'],
        petSymbol: ['🐱 🐈'],
        foodSymbol: ['🐟🐠🍪'],
        description: 'Hypoallergenic complete nutrition for all adult cats'
    },
    
    {
        id: 3,
        name: 'HUFT Dehydrated Anchovies Crunchies Cat Treats',
        oldPrice: 2.91,
        newPrice: 2.61,
        discount: 0.30,
        tags: ['Grainfree', 'Fish','Treat', 'Cat'],
        favorite: false,
        stars: 4.0,
        imageUrl: '../../../assets/Images/PetFoods/PetFood3.webp',
        petType: ['Cat'],
        petSymbol: ['🐱 🐈'],
        foodSymbol: ['🐟🐠🥖'],
        description: 'Tempting Smell and Irresistible Crunchy Texture'
    },
    
    {
        id: 4,
        name: 'Cesar Premium Sasami Adult Wet Dog Food (Gourmet meal)',
        oldPrice: 11.49,
        newPrice: 10.31,
        discount: 1.18,
        tags: ['Wet', 'Dog','Adult Dog'],
        favorite: false,
        stars: 5.0,
        imageUrl: '../../../assets/Images/PetFoods/PetFood4.webp',
        petType: ['Dog','Adult Dog'],
        petSymbol: ['🐶 🐕‍🦺'],
        foodSymbol: ['🍵'],
        description: 'Low-fat, steamed, irresistible, international dog food'
    },
    
    {
        id: 5,
        name: 'Drools Chicken and Egg Adult Dog Food',
        oldPrice: 17.99,
        newPrice: 15.32,
        discount: 2.67,
        tags: ['Chicken', 'Egg', 'Starter', 'Dog','Adult Dog'],
        favorite: false,
        stars: 4.89,
        imageUrl: '../../../assets/Images/PetFoods/PetFood5.jpg',
        petType: ['Dog','Adult Dog'],
        petSymbol: ['🐶 🐕‍🦺'],
        foodSymbol: ['🐓🥚🥖'],
        description: 'A great combination of ingredients, Vitamins, Minerals and Nutrition for everything from strong bones to optimal digestion'
    },
    
    
    {
        id: 6,
        name: 'Drools Focus Starter Super Premium Dry Dog Food',
        oldPrice: 71.82,
        newPrice: 68.35,
        discount: 3.47,
        tags: ['Dry', 'Starter', 'Dog'],
        favorite: false,
        stars: 5.0,
        imageUrl: '../../../assets/Images/PetFoods/PetFood6.webp',
        petType: ['Dog'],
        petSymbol: ['🐶 🐕‍🦺'],
        foodSymbol: ['🍪🥖'],
        description: 'Specially designed for the weaning puppies, from 3 weeks to 3 months who require more amount of Protein, Energy and essential Nutrients'
    },
    
    {
        id: 7,
        name: 'Farmina NnD Low Grain Starter Puppy Food',
        oldPrice: 89.65,
        newPrice: 83.27,
        discount: 6.38,
        tags: ['Dry', 'Grain', 'Meat', 'Starter', 'Dog','Puppy'],
        favorite: false,
        stars: 4.95,
        imageUrl: '../../../assets/Images/PetFoods/PetFood7.webp',
        petType: ['Dog','Puppy'],
        petSymbol: ['🐶 🐕‍🦺'],
        foodSymbol: ['🍖🥩🍪🥖'],
        description: 'Preservative-free, GMO-free, international dog food'
    },
    
    {
        id: 8,
        name: 'Huft Saras Wholesome Food-Classic Chicken and Brown Rice',
        oldPrice: 1.19,
        newPrice: 0.99,
        discount: 0.2,
        tags: ['Chicken', 'Non-veg', 'Brown-Rice', 'Dog', 'Puppy'],
        favorite: false,
        stars: 5.0,
        imageUrl: '../../../assets/Images/PetFoods/PetFood8.webp',
        petType: ['Dog', 'Puppy'],
        petSymbol: ['🐶 🐕‍🦺'],
        foodSymbol: ['🍗🐓🍚'],
        description: 'Optimal Protein for growth & healthy living.'
    },
    
    {
        id: 9,
        name: 'Arden Grange Dry Puppy Junior Food',
        oldPrice: 24.00,
        newPrice: 23.22,
        discount: 0.78,
        tags: ['Chicken', 'Dry', 'Dog', 'Puppy'],
        favorite: false,
        stars: 5.0,
        imageUrl: '../../../assets/Images/PetFoods/PetFood9.webp',
        petType: ['Dog','Puppy'],
        petSymbol: ['🐶 🐕‍🦺'],
        foodSymbol: ['🍗🐓🍪🥖'],
        description: 'Hypoallergenic, GMO-free, easy to digest & perfect for fussy eaters'
    },
    
    {
        id: 10,
        name: 'Kennel Kitchen Lamb with Pumpkin Supreme Cuts in Gravy',
        oldPrice: 0.84,
        newPrice: 0.80,
        discount: 0.04,
        tags: ['Gravy','Lamb','Pumpkin', 'Dog', 'Cat'],
        favorite: false,
        stars: 5.0,
        imageUrl: '../../../assets/Images/PetFoods/PetFood10.webp',
        petType: ['Dog', 'Cat'],
        petSymbol: ['🐶 🐕‍🦺 🐱 🐈'],
        foodSymbol: ['🐐🍅🍵'],
        description: 'Contains high levels of boneless lamb that provide high levels of protein, healthy energy levels and easier digestibility'
    },
    
    {
        id: 11,
        name: 'Kitty Licks',
        oldPrice: 0.67,
        newPrice: 0.60,
        discount: 0.07,
        tags: ['Tuna', 'Salmon','Treat', 'Cat'],
        favorite: false,
        stars: 3.71,
        imageUrl: '../../../assets/Images/PetFoods/PetFood11.webp',
        petType: ['Cat'],
        petSymbol: ['🐱 🐈'],
        foodSymbol: ['🐟🐠🥖'],
        description: 'Contains tuna and is high in fiber, which helps the digestive system.'
    },
    
    {
        id: 12,
        name: 'Kennel Kitchen Fish Chunks in Gravy',
        oldPrice: 0.71,
        newPrice: 0.70,
        discount: 0.01,
        tags: ['Gravy', 'Wet', 'Fish', 'Cat', 'Kitten'],
        favorite: false,
        stars: 4.10,
        imageUrl: '../../../assets/Images/PetFoods/PetFood12.webp',
        petType: ['Cat', 'Kitten'],
        petSymbol: ['🐱 🐈'],
        foodSymbol: ['🐟🐠🍵'],
        description: 'Preservative-free, delicious & made from real ingredients'
    },
    
    {
        id: 13,
        name: 'Loveabowl Cat Kibble Chicken',
        oldPrice: 27.99,
        newPrice: 26.54,
        discount: 1.45,
        tags: ['Chicken', 'Grainfree', 'Cat'],
        favorite: false,
        stars: 4.70,
        imageUrl: '../../../assets/Images/PetFoods/PetFood13.webp',
        petType: ['Cat'],
        petSymbol: ['🐱 🐈'],
        foodSymbol: ['🐓🍗'],
        description: 'Fortified with taurine for better cardiovascular health.'
    },
    
    {
        id: 14,
        name: 'Loveabowl Grain Free Chicken with Atlantic Lobster',
        oldPrice: 16.79,
        newPrice: 14.32,
        discount: 2.47,
        tags: ['Chicken', 'Lobster', 'Grainfree', 'Dog'],
        favorite: false,
        stars: 4.0,
        imageUrl: '../../../assets/Images/PetFoods/PetFood14.jpg',
        petType: ['Dog'],
        petSymbol: ['🐶 🐕‍🦺'],
        foodSymbol: ['🐓🍗🦞'],
        description: 'The grain-free formulation makes it easy to digest, and reduces the risk of an upset tummy.'
    },
    
    {
        id: 15,
        name: 'Nature’s Hug Junior Growth Toy & Small Breed Vegan Dog Food',
        oldPrice: 17.99,
        newPrice: 15.77,
        discount: 2.22,
        tags: ['Vegan', 'Dry', 'Dog', 'Small-breed'],
        favorite: false,
        stars: 5.0,
        imageUrl: '../../../assets/Images/PetFoods/PetFood15.webp',
        petType: ['Dog', 'Small-breed'],
        petSymbol: ['🐶 🐕‍🦺'],
        foodSymbol: ['🥦🥖'],
        description: 'Supports bone structure and immunity'
    },
    
    {
        id: 16,
        name: `Nature’s Hug Adult Maintenance Indoor Hairball Vegan Food`,
        oldPrice: 5.91,
        newPrice: 5.01,
        discount: 0.90,
        tags: ['Vegan', 'Cat', 'Adult Cat'],
        favorite: false,
        stars: 4.02,
        imageUrl: '../../../assets/Images/PetFoods/PetFood16.webp',
        petType: ['Cat', 'Adult Cat'],
        petSymbol: ['🐱 🐈'],
        foodSymbol: ['🥦'],
        description: 'Maintains weight, prevents hairball and improves digestion'
    },
    
    {
        id: 17,
        name: 'Orijen Cat Food',
        oldPrice: 7.98,
        newPrice: 6.90,
        discount: 1.08,
        tags: ['Chicken', 'Turkey', 'Fish', 'Cat'],
        favorite: false,
        stars: 4.0,
        imageUrl: '../../../assets/Images/PetFoods/PetFood17.webp',
        petType: ['Cat'],
        petSymbol: ['🐱 🐈'],
        foodSymbol: ['🐓🍗🐟🐠'],
        description: 'The first 5 ingredients are fresh or raw poultry and fish ingredients.'
    },
    
    {
        id: 18,
        name: 'Orijen Grain Free Large Breed Dry Puppy Food',
        oldPrice: 82.79,
        newPrice: 81.70,
        discount: 1.09,
        tags: ['Chicken', 'Fish', 'Dry','Grainfree', 'Dog','Puppy', 'Large-breed'],
        favorite: false,
        stars: 4.88,
        imageUrl: '../../../assets/Images/PetFoods/PetFood18.webp',
        petType: ['Dog','Puppy', 'Large-breed'],
        petSymbol: ['🐶 🐕‍🦺'],
        foodSymbol: ['🐓🍗🐟🐠🍪'],
        description: 'High protein, grain-free dog food with fresh ingredients'
    },
    
    {
        id: 19,
        name: 'Pedigree Chicken & Vegetables Adult Dry Dog Food',
        oldPrice: 1.10,
        newPrice: 1.00,
        discount: 0.10,
        tags: ['Dry', 'Non-veg', 'Chicken', 'Vegetables', 'Dog', 'Adult Dog'],
        favorite: false,
        stars: 4.83,
        imageUrl: '../../../assets/Images/PetFoods/PetFood19.webp',
        petType: ['Dog', 'Adult Dog'],
        petSymbol: ['🐶 🐕‍🦺'],
        foodSymbol: ['🐓🍗🥕🥔🥦🍪'],
        description: 'High-quality, wholesome, balanced dog food'
    },
    
    {
        id: 20,
        name: 'Pedigree Grilled Liver Chunks with Vegetables Gravy Adult Wet Dog Food',
        oldPrice: 0.60,
        newPrice: 0.59,
        discount: 0.01,
        tags: ['Wet', 'Gravy', 'Liver', 'Non-veg','Vegetables', 'Dog', 'Adult Dog'],
        favorite: false,
        stars: 4.83,
        imageUrl: '../../../assets/Images/PetFoods/PetFood20.webp',
        petType: ['Dog', 'Adult Dog'],
        petSymbol: ['🐶 🐕‍🦺'],
        foodSymbol: ['🥩🥕🥔🥦🍵'],
        description: 'Complete, balanced, tempting dog food'
    },
    
    {
        id: 21,
        name: 'Pedigree Pro Expert Nutrition Active Adult Dry Dog Food',
        oldPrice: 47.73,
        newPrice: 46.03,
        discount: 1.70,
        tags: ['Dry', 'Dog','Adult Dog', 'Large-breed'],
        favorite: false,
        stars: 5.0,
        imageUrl: '../../../assets/Images/PetFoods/PetFood21.webp',
        petType: ['Dog','Adult Dog', 'Large-breed'],
        petSymbol: ['🐶 🐕‍🦺'],
        foodSymbol: ['🍪🥖'],
        description: 'High-quality, tasty, easy to consume dog food'
    },
    
    {
        id: 22,
        name: 'Pedigree Pro Expert Nutrition Senior Adult Dog Food',
        oldPrice: 13.09,
        newPrice: 12.31,
        discount: 0.78,
        tags: ['Dry', 'Dog','Adult Dog'],
        favorite: false,
        stars: 5.0,
        imageUrl: '../../../assets/Images/PetFoods/PetFood22.webp',
        petType: ['Dog','Adult Dog'],
        petSymbol: ['🐶 🐕‍🦺'],
        foodSymbol: ['🍪🥖'],
        description: 'Professional dog food for highly active large breed adult dogs'
    },
    
    {
        id: 23,
        name: 'Pedigree Small Breed Dry Puppy Food Lamb & Milk',
        oldPrice: 9.07,
        newPrice: 8.67,
        discount: 0.40,
        tags: ['Dry', 'Milk', 'Lamb', 'Dog', 'Puppy','Small-breed'],
        favorite: false,
        stars: 5.0,
        imageUrl: '../../../assets/Images/PetFoods/PetFood23.webp',
        petType: ['Dog', 'Puppy','Small-breed'],
        petSymbol: ['🐶 🐕‍🦺'],
        foodSymbol: ['🐐🍪🥛'],
        description: 'High-quality, tasty, wholesome, balanced dog food'
    },
    
    {
        id: 24,
        name: 'Royal Canin Maxi Puppy Dry Dog Food',
        oldPrice: 9.35,
        newPrice: 8.78,
        discount: 0.57,
        tags: ['Non-veg','Dry', 'Dog', 'Puppy', 'Adult Dog'],
        favorite: false,
        stars: 4.9,
        imageUrl: '../../../assets/Images/PetFoods/PetFood24.webp',
        petType: ['Dog', 'Puppy', 'Adult Dog'],
        petSymbol: ['🐶 🐕‍🦺'],
        foodSymbol: ['🍗🍖🥩🍪'],
        description: 'High-quality, balanced, international dog food'
    },
    
    {
        id: 25,
        name: 'Royal Canin Mother and Baby Cat Food',
        oldPrice: 16.77,
        newPrice: 15.33,
        discount: 1.44,
        tags: ['Cat','Mother-cat','Baby-cat'],
        favorite: false,
        stars: 4.10,
        imageUrl: '../../../assets/Images/PetFoods/PetFood25.webp',
        petType: ['Cat','Mother-cat','Baby-cat'],
        petSymbol: ['🐱 🐈'],
        foodSymbol: ['🍪🥖'],
        description: 'Grain-free, wholesome, flavourful cat food'
    },
    
    {
        id: 26,
        name: 'Royal Canin Kitten Food in Gravy',
        oldPrice: 4.99,
        newPrice: 4.09,
        discount: 0.90,
        tags: ['Gravy', 'Cat','Kitten'],
        favorite: false,
        stars: 4.18,
        imageUrl: '../../../assets/Images/PetFoods/PetFood26.webp',
        petType: ['Cat','Kitten'],
        petSymbol: ['🐱 🐈'],
        foodSymbol: ['🍵'],
        description: 'Delicious, nutritious, healthy, international cat food'
    },
    
    {
        id: 27,
        name: 'Schesir Chicken with Carrot Canned Wet Dog Food',
        oldPrice: 2.99,
        newPrice: 2.67,
        discount: 0.32,
        tags: ['Chicken', 'Non-veg', 'Wet', 'Carrot', 'Canned', 'Dog'],
        favorite: false,
        stars: 5.0,
        imageUrl: '../../../assets/Images/PetFoods/PetFood27.webp',
        petType: ['Dog'],
        petSymbol: ['🐶 🐕‍🦺'],
        foodSymbol: ['🥫🍖🥩🥕🍵'],
        description: 'A Schesir recipe based on real chicken, combined with a topping of sweet and tasty carrots, served in mouthwatering jelly format, for an indulgent and original meal'
    },
    
    {
        id: 28,
        name: 'Schesir Tuna With Seabass Adult Cat Wet Food',
        oldPrice: 1.55,
        newPrice: 1.44,
        discount: 0.11,
        tags: ['Tuna', 'Wet', 'Jelly', 'Cat','Adult Cat'],
        favorite: false,
        stars: 4.50,
        imageUrl: '../../../assets/Images/PetFoods/PetFood28.webp',
        petType: ['Cat','Adult Cat'],
        petSymbol: ['🐱 🐈'],
        foodSymbol: ['🐟🍵'],
        description: 'Natural, steamed, preservative-free, hand-processed & cruelty-free'
    },
    
    {
        id: 29,
        name: 'Sheba Melty Maguro Seafood Cat Food',
        oldPrice: 4.99,
        newPrice: 3.99,
        discount: 1.00,
        tags: ['Tuna', 'Fish', 'Seafood', 'Cat'],
        favorite: false,
        stars: 4.63,
        imageUrl: '../../../assets/Images/PetFoods/PetFood29.webp',
        petType: ['Cat'],
        petSymbol: ['🐱 🐈'],
        foodSymbol: ['🍤🦑🐟'],
        description: 'High-quality, savourity & delicious'
    },
    
    {
        id: 30,
        name: 'Sheba Rich Premium Tuna Pumpkin & Carrot food for Cats',
        oldPrice: 4.32,
        newPrice: 4.00,
        discount: 0.32,
        tags: ['Tuna', 'Carrot', 'Pumpkin','Gravy', 'Cat', 'Adult Cat'],
        favorite: false,
        stars: 4.35,
        imageUrl: '../../../assets/Images/PetFoods/PetFood30.webp',
        petType: ['Cat', 'Adult Cat'],
        petSymbol: ['🐱 🐈'],
        foodSymbol: ['🐟🥕🍵'],
        description: 'Tender delicious tuna pumpkin & carrot in gravy flavour that improves cats bowel movements'
    },
    
    {
        id: 31,
        name: 'Sheba Succulent Chicken Breast in Gravy',
        oldPrice: 8.99,
        newPrice: 8.67,
        discount: 0.32,
        tags: ['Chicken', 'Gravy', 'Wet', 'Cat','Adult Cat'],
        favorite: false,
        stars: 5.0,
        imageUrl: '../../../assets/Images/PetFoods/PetFood31.webp',
        petType: ['Cat','Adult Cat'],
        petSymbol: ['🐱 🐈'],
        foodSymbol: ['🐓🍗🍵'],
        description: 'Tender, high-quality, delicious, international cat food'
    },
    
    {
        id: 32,
        name: 'Signature Grain Zero Adult Dry Dog Food',
        oldPrice: 65.16,
        newPrice: 63.71,
        discount: 1.45,
        tags: ['Chicken', 'Egg', 'Vegetables','Dry', 'Grainfree', 'Dog', 'Adult Dog'],
        favorite: false,
        stars: 5.0,
        imageUrl: '../../../assets/Images/PetFoods/PetFood32.webp',
        petType: ['Dog', 'Adult Dog'],
        petSymbol: ['🐶 🐕‍🦺'],
        foodSymbol: ['🥚🐓🍗🥦🥖'],
        description: 'Hypoallergenic, complete nutrition for all adult dogs'
    },
    
    {
        id: 33,
        name: 'Signature Grain Zero Puppy Dry Food',
        oldPrice: 70.59,
        newPrice: 68.25,
        discount: 2.34,
        tags: ['Chicken', 'Egg', 'Vegetables', 'Grainfree', 'Dry', 'Dog', 'Puppy'],
        favorite: false,
        stars: 1.0,
        imageUrl: '../../../assets/Images/PetFoods/PetFood33.webp',
        petType: ['Dog', 'Puppy'],
        petSymbol: ['🐶 🐕‍🦺'],
        foodSymbol: ['🥚🐓🍗🥦🍪'],
        description: 'Hypoallergenic, complete nutrition for puppies'
    },
    
    {
        id: 34,
        name: 'Signature Grain Zero Starter Food for Mother and Puppy',
        oldPrice: 78.19,
        newPrice: 72.53,
        discount: 5.66,
        tags: ['Chicken', 'Egg', 'Vegetables', 'Starter', 'Grainfree', 'Dog', 'Mother-Dog', 'Puppy'],
        favorite: false,
        stars: 5.0,
        imageUrl: '../../../assets/Images/PetFoods/PetFood34.webp',
        petType: ['Dog', 'Mother-Dog', 'Puppy'],
        petSymbol: ['🐶 🐕‍🦺'],
        foodSymbol: ['🥚🐓🍗🥦🥖'],
        description: 'Hypoallergenic starter formula for mother dog and puppy'
    },
    
    {
        id: 35,
        name: 'Temptations Creamy Purrrr-ee Cat Treats',
        oldPrice: 0.45,
        newPrice: 0.39,
        discount: 0.06,
        tags: ['Chicken', 'Tuna', 'Treat', 'Cat'],
        favorite: false,
        stars: 2.99,
        imageUrl: '../../../assets/Images/PetFoods/PetFood35.webp',
        petType: ['Cat'],
        petSymbol: ['🐱 🐈'],
        foodSymbol: ['🐓🍗🐟🥖'],
        description: 'Creamy, flavourful & mess-free'
    },
    
    {
        id: 36,
        name: 'Whiskas Chicken Adult Dry Cat Food',
        oldPrice: 27.32,
        newPrice: 24.23,
        discount: 3.09,
        tags: ['Chicken', 'Dry', 'Cat', 'Adult Cat'],
        favorite: false,
        stars: 4.99,
        imageUrl: '../../../assets/Images/PetFoods/PetFood36.webp',
        petType: ['Cat', 'Adult Cat'],
        petSymbol: ['🐱 🐈'],
        foodSymbol: ['🐓🍗🍪'],
        description: 'High-quality, crunchy, balanced & delicious'
    },
    
    {
        id: 37,
        name: 'Whiskas Chicken With Tuna And Carrot in Gravy Cat Food',
        oldPrice: 3.99,
        newPrice: 3.67,
        discount: 0.32,
        tags: ['Chicken', 'Tuna', 'Carrot', 'Gravy','Wet', 'Cat','Adult Cat'],
        favorite: false,
        stars: 4.59,
        imageUrl: '../../../assets/Images/PetFoods/PetFood37.webp',
        petType: ['Cat','Adult Cat'],
        petSymbol: ['🐱 🐈'],
        foodSymbol: ['🐓🍗🐟🥕🍵'],
        description: 'A new, balanced, and flavorful cat food. Made with real fish, chicken, and nutritious veggies in a tasty gravy sauce.'
    },
    
    {
        id: 38,
        name: 'Whiskas Ocean Fish Adult Wet Cat Food',
        oldPrice: 17.90,
        newPrice: 15.77,
        discount: 2.13,
        tags: ['Wet', 'Fish', 'Cat', 'Adult Cat'],
        favorite: false,
        stars: 4.10,
        imageUrl: '../../../assets/Images/PetFoods/PetFood38.webp',
        petType: ['Cat', 'Adult Cat'],
        petSymbol: ['🐱 🐈'],
        foodSymbol: [],
        description: 'Complete, balanced, easy to eat & digest'
    },
    
    {
        id: 39,
        name: 'Canine Creek Starter Ultra Premium Dry Dog Food',
        oldPrice: 76.95,
        newPrice: 74.31,
        discount: 2.64,
        tags: ['Dry', 'Grainfree', 'Starter', 'Dog'],
        favorite: false,
        stars: 5.0,
        imageUrl: '../../../assets/Images/PetFoods/PetFood39.webp',
        petType: ['Dog'],
        petSymbol: ['🐶 🐕‍🦺'],
        foodSymbol: ['🍪🥖'],
        description: 'Grain-free advanced pet nutrition formula'
    },
    
    {
        id: 40,
        name: 'Kitty Yums Adult Dry Cat Food - Ocean Fish',
        oldPrice: 25.52,
        newPrice: 22.99,
        discount: 2.53,
        tags: ['Fish', 'Dry', 'Cat', 'Adult Cat'],
        favorite: false,
        stars: 5.0,
        imageUrl: '../../../assets/Images/PetFoods/PetFood40.webp',
        petType: ['Cat', 'Adult Cat'],
        petSymbol: ['🐱 🐈'],
        foodSymbol: ['🐟🐠🍪🥖'],
        description: 'High protein, healthy & balanced meal'
    },
    
    {
        id: 41,
        name: 'Arden Grange Grain Free Fresh Chicken & Potato Dry Kitten Food',
        oldPrice: 7.56,
        newPrice: 7.04,
        discount: 0.42,
        tags: ['Chicken', 'Potato', 'Dry', 'Grainfree', 'Cat', 'Kitten'],
        favorite: false,
        stars: 4.92,
        imageUrl: '../../../assets/Images/PetFoods/PetFood41.webp',
        petType: ['Cat', 'Kitten'],
        petSymbol: ['🐱 🐈'],
        foodSymbol: ['🐓🍗🥔🍪'],
        description: 'Contains large portions of fresh chicken that provides an easily digestible source of protein'
    },
    ]
  }
}
