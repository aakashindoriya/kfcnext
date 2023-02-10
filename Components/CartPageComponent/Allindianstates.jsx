import { Select } from '@chakra-ui/react'
import React from 'react'

export default function Allindianstates({data,HandleInput}) {
  return (
    <Select 
    color='white' bg="transparent" variant='flushed' 
    placeholder="state" name="state" value={data.state} onChange={(e)=>HandleInput(e)}
   >
<option style={{color:"red",textAlign:"center"}}  value="Andhra Pradesh">Andhra Pradesh</option>
<option style={{color:"red",textAlign:"center"}} value="Arunachal Pradesh">Arunachal Pradesh</option>
<option style={{color:"red",textAlign:"center"}} value="Assam">Assam</option>
<option style={{color:"red",textAlign:"center"}} value="Chandigarh">Chandigarh</option>
<option style={{color:"red",textAlign:"center"}} value="Chhattisgarh">Chhattisgarh</option>
<option style={{color:"red",textAlign:"center"}} value="Delhi">Delhi</option>
<option style={{color:"red",textAlign:"center"}} value="Goa">Goa</option>
<option  style={{color:"red",textAlign:"center"}}value="Gujarat">Gujarat</option>
<option style={{color:"red",textAlign:"center"}} value="Haryana">Haryana</option>
<option style={{color:"red",textAlign:"center"}} value="Himachal Pradesh">Himachal Pradesh</option>
<option style={{color:"red",textAlign:"center"}} value="Jammu and Kashmir">Jammu and Kashmir</option>
<option style={{color:"red",textAlign:"center"}} value="Jharkhand">Jharkhand</option>
<option style={{color:"red",textAlign:"center"}} value="Karnataka">Karnataka</option>
<option style={{color:"red",textAlign:"center"}} value="Madhya Pradesh">Madhya Pradesh</option>
<option style={{color:"red",textAlign:"center"}} value="Maharashtra">Maharashtra</option>
<option  style={{color:"red",textAlign:"center"}}value="Meghalaya">Meghalaya</option>
<option  style={{color:"red",textAlign:"center"}}value="Mizoram">Mizoram</option>
<option style={{color:"red",textAlign:"center"}} value="Nagaland">Nagaland</option>
<option style={{color:"red",textAlign:"center"}} value="Odisha">Odisha</option>
<option style={{color:"red",textAlign:"center"}} value="Punjab">Punjab</option>
<option style={{color:"red",textAlign:"center"}} value="Rajasthan">Rajasthan</option>
<option  style={{color:"red",textAlign:"center"}}value="Sikkim">Sikkim</option>
<option  style={{color:"red",textAlign:"center"}}value="Tamil Nadu">Tamil Nadu</option>
<option  style={{color:"red",textAlign:"center"}}value="Telangana">Telangana</option>
<option style={{color:"red",textAlign:"center"}} value="Uttar Pradesh">Uttar Pradesh</option>
<option style={{color:"red",textAlign:"center"}} value="Uttarakhand">Uttarakhand</option>

</Select>
  )
}
