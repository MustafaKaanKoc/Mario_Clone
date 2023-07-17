import React from 'react'
import Matter from 'matter-js'
import { View , Image} from 'react-native'
const  Stairs =props=>{
    const widthBody =props.body.bounds.max.x- props.body.bounds.min.x
    const heighthBody =props.body.bounds.max.y- props.body.bounds.min.y
    const xBody= props.body.position.x - widthBody/2
    const yBody= props.body.position.y - heighthBody/2
    const color= props.color;
    return(
        <View style={{
            backgroundColor:color,
            position:'absolute',
            left:xBody,
            top:yBody,
            width:widthBody,
            height:heighthBody,
            borderBottomColor:'black',
        }}>
        <Image  source={require('./stairs.png')}  resizeMode="repeat"   style={{width:widthBody,height:heighthBody}}     /> 

        </View>
    )

}
export default (world,color,pos,size) => {
  const initialStairs=Matter.Bodies.rectangle(
    pos.x, pos.y , size.width, size.height, {label:'Stairs', isStatic:true,}
  )
  Matter.World.add(world,initialStairs)
  return{
    body :initialStairs,
    color,
    pos,
    renderer:<Stairs/>
  }
}
