import {User} from "./../models/user.model.js";



export const addUser =(async(req,res)=>{
        
        const {username,email,contact}= req.body;
        console.log(username,email,contact);

        if(!username && !email && !contact) return  res.status(401).json({message:'All fields are mandatory'})

          try {
                      let str="PGGS11/"
                      let session= new Date().getFullYear();
                      str +=session;
              
                      let prevMembershipId;
                      // prevous task fetch
                   
                      const pdata = await User.find({}).sort({membershipId :-1}).limit(1)
                       if(pdata.length>0){
                              prevMembershipId= pdata[0].membershipId 
                              prevMembershipId=Number(prevMembershipId.replace("PGGS11/2024/",""));

                              console.log(prevMembershipId);

                       }else{
                              prevMembershipId=0;
                       }
                       prevMembershipId+=1
                       str +="/00"+(prevMembershipId)
              
                      console.log(str);
      
              const response= await User.create({
                      username,
                      email,
                      contact,
                      membershipId:str
                      
              })
      
      
              res.status(200).json(response)
          } catch (error) {
                console.log(error);
                res.status(500).json({message:'error'})
          }


})


export const allUsers=(async(req,res)=>{
try {
                const userdata=await User.find();
                res.status(200).json(userdata)

        
} catch (error) {
        console.log(error);
        res.status(500).json({message:'serve error while loading All user records'})
        
}        

})


export const delUser=(async(req,res)=>{

        const userId=req.params.id;

        try {
               try {
                 const response= await User.find({_id:userId})
                 if(response.length===0) return res.status(401).json({message:'User Not Found to delete'})
               } catch (error) {
                return res.status(401).json({message:'User Not Found to delete'})
               }
                        
                console.log(response.length);
                await User.findByIdAndDelete(userId)
                res.status(200).json({message:'User record deleted succesfully'})

        } catch (error) {
                console.log(error);
                res.status(500).json({message:'server error while deleting record'})
        }
})




export const editUser=(async(req,res)=>{
        const userID=req.params.id;
        const userData=req.body;
        console.log(userID,userData);
        try {   
               try {
                 const response1= await User.find({_id:userID})
                 if(response1.length===0) return res.status(401).json({message:'User Not Found to Update'})
               } catch (error) {
                return res.status(401).json({message:'User Not Found to Update'})
               }

                const response=await User.findByIdAndUpdate(userID,userData,{new:true})

                res.status(200).json({message:'updated Succesfully',response})
                
        } catch (error) {
                console.log(error);
                res.status(500).json({message:'server error while modifying user'})
                
        }       

})