## Why prisma ?

<p>Working with relational databases is a major bottleneck in application development. Debugging SQL queries or complex ORM objects often consume hours of development time

Prisma makes it easy for developers to reason about their database queries by providing a clean and type-safe API for submitting database queries which returns plain old JavaScript objects.</p>

## 1. npm install prisma --save-dev

## 2. npx prisma init --datasource-provider mysql

![image](https://github.com/Soum-ik/Prisma_learning/assets/110479389/efaa8a8f-ff9f-4727-927d-ad1bdce810a8)

## You can connect those with prisma!

![image](https://github.com/Soum-ik/Prisma_learning/assets/110479389/9e3629f5-5027-4708-b404-60015a484875)

## You can use those database with prisma!

![image](https://github.com/Soum-ik/Prisma_learning/assets/110479389/315a86e7-192e-47f2-b709-ef27ebcee86b)

## Write your first schema

![image](https://github.com/Soum-ik/Prisma_learning/assets/110479389/f4807975-573f-4b75-8be7-7dd07f782afc)

--> Start migration with this commpand

## npx prisma migrate dev

![image](https://github.com/Soum-ik/Prisma_learning/assets/110479389/5c9e5ef9-f27e-44a4-a7f1-038a705fea8b)

## Some properties on prisma

![image](https://github.com/Soum-ik/Prisma_learning/assets/110479389/7355fa29-0b8d-4e1d-8163-f34e558efa6e)

![image](https://github.com/Soum-ik/Prisma_learning/assets/110479389/60b63986-75c2-4858-a36e-2397ae10388a)

![image](https://github.com/Soum-ik/Prisma_learning/assets/110479389/61e57ca4-7229-476e-a5d2-439a4457fdc1)

![image](https://github.com/Soum-ik/Prisma_learning/assets/110479389/1f6e71ab-b061-44fa-bcdf-15e381f69e95)

![image](https://github.com/Soum-ik/Prisma_learning/assets/110479389/bf1b57eb-49b2-4f25-b0f5-37e2f1083082)

![image](https://github.com/Soum-ik/Prisma_learning/assets/110479389/cbc0dcd8-5097-4f60-afaf-08929593b537)

![image](https://github.com/Soum-ik/Prisma_learning/assets/110479389/caaf34ba-9a0f-4a02-9b3a-195b2651cd56)

## using operator
![image](https://github.com/Soum-ik/Prisma_learning/assets/110479389/5a4aa96a-59fd-4c60-ab9c-5af77bbb4337)

##F Few Codes
======Aggregate (avg,count,max,min,sum)======

const result = await prisma.Employee.aggregate({
      _avg: { salary: true },
      _count: { salary: true },
      _max: { salary: true },
      _min: { salary: true },
      _sum: { salary: true },
});


======Aggregate (groupBy,having)======

const result = await prisma.Employee.groupBy({
       by: ["city"],
       _count: { salary: true },
})

const result = await prisma.Employee.groupBy({
      by: ["city"],
      _sum: { salary: true },
      having: { city: "Chicago"},
})


===========Pagination================

// Using cursor
const result = await prisma.Employee.findMany({
     cursor: { id: 2 },
     take: 3,
})

// Using Limit Offset
const result = await prisma.Employee.findMany({
      skip: 2,
      take: 3,
})


===========Query Time Enable Logging================

// Time Calculation
const startTime = Date.now();
const result = await prisma.Employee.findMany()
const executionTime = (Date.now() - startTime) + " milliseconds";


// query | info | warn | error
const prisma = new PrismaClient({log: ['query', 'info', 'warn', 'error']});
const result = await prisma.Employee.findMany()



==========Raw queries=====================

const prisma = new PrismaClient();
const result = await prisma.$queryRaw `SELECT * FROM employee`;




========Transactions & Rollback================


    try {
        const prisma = new PrismaClient();

        const createUser = prisma.User.create({
            data:{email:"john1.doe@example.com", password:"123"}
        })

        const deleteComment=prisma.Comment.delete({
            where:{id:5}
        })

        const result=await prisma.$transaction([createUser, deleteComment])

        console.log(result)
    }
    catch (e) {

        console.log(e)
    }





======================Comparison Operators======================

Comparison Operators:

1. equals: Matches values that are equal to the specified value.
2. not: Negates the condition, matching values that are not equal to the specified value.
3. in: Matches values that are in a specified array of values.
4. notIn: Matches values that are not in a specified array of values.
5. lt (Less Than): Matches values that are less than the specified value.
6. lte (Less Than or Equal To): Matches values that are less than or equal to the specified value.
7. gt (Greater Than): Matches values that are greater than the specified value.
8. gte (Greater Than or Equal To): Matches values that are greater than or equal to the specified value.
9. contains: Matches values that contain a specified substring.
10. startsWith: Matches values that start with a specified substring.
11. endsWith: Matches values that end with a specified substring.


const result = await prisma.Employee.findMany({
    where:{salary:{equals:75000}}
})

const result = await prisma.Employee.findMany({
    where:{salary:{lt:75000}}
})

const result = await prisma.Employee.findMany({
    where:{salary:{lte:75000}}
})

const result = await prisma.Employee.findMany({
    where:{salary:{gt:75000}}
})

const result = await prisma.Employee.findMany({
    where:{salary:{gte:75000}}
})

const result = await prisma.Employee.findMany({
    where:{salary:{not:75000}}
})

const result = await prisma.Employee.findMany({
    where:{salary:{in:[75000,60000]}}
})

const result = await prisma.Employee.findMany({
    where:{salary:{notIn:[75000,60000]}}
})


const result = await prisma.Employee.findMany({
    where:{name:{contains:'John'}}
})

const result = await prisma.Employee.findMany({
      where:{name:{startsWith:'J'}}
})


const result = await prisma.Employee.findMany({
      where:{name:{endsWith:'n'}}
})


======================Logical Operators======================

1. AND: Combines multiple conditions with logical AND.
2. OR: Combines multiple conditions with logical OR.
3. NOT: Negates a condition.


const result = await prisma.Employee.findMany({
    where:{
         AND: [
              { name: {contains:"Alice"} },
              { salary: { gt: 50000 } }
           ]
     }
})

const result = await prisma.Employee.findMany({
    where:{
         OR: [
              { name: {contains:"Alice"} },
              { salary: { gt: 50000 } }
           ]
     }
})

const result = await prisma.Employee.findMany({
     where:{
          NOT:[
               { name: {contains:"Alice"} },
               { salary: { gt: 90000 } }
          ]
      }
})




======================Date Operators=============================

1. lt (Less Than): Matches dates that are before the specified date.
2. lte (Less Than or Equal To): Matches dates that are on or before the specified date.
3. gt (Greater Than): Matches dates that are after the specified date.
4. gte (Greater Than or Equal To): Matches dates that are on or after the specified date.

        const result=await prisma.Employee.findMany({
            where:{
                birthDay:{
                    lt:new Date("2023-10-11"),
                    gt:new Date("2017-10-11")
                }
            }
        });


### If you like this repo please give star.
