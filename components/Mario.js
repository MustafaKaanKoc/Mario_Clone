import React from 'react'
import Matter from 'matter-js'
import { View ,Image} from 'react-native'
const  Mario =props=>{
    const widthBody =props.body.bounds.max.x- props.body.bounds.min.x
    const heighthBody =props.body.bounds.max.y- props.body.bounds.min.y
    const xBody= props.body.position.x - widthBody/2
    const yBody= props.body.position.y - heighthBody/2
    const color= props.color;
    return(
      <View style={{
        
        position:'absolute',
        left:xBody,
        top:yBody,
        width:widthBody,
        height:heighthBody,       
    }}>
       
        <Image  source={require('./mario.jpg')}     style={{width:55,height:80, margin:0,padding:0}}     /> 

      </View>
       
        
    )

}
export default (world,pos,size) => {
  const initialMario=Matter.Bodies.rectangle(
    pos.x, pos.y , size.width, size.height, {label:'Mario'} , {isStatic:'true'},
  )
  Matter.World.add(world,initialMario)
  return{
    body :initialMario,
    pos,
    renderer:<Mario/>
  }
}
