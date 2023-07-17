import Matter from "matter-js";
import Mario from "../components/Mario";
import Floor from "../components/Floor";
import { Dimensions } from "react-native";
import Stairs from "../components/Stairs";
import Tube from "../components/Tube";
import MysteryBrick from "../components/MysteryBrick";

const {width,height} = Dimensions.get('window');

export default restart =>{
    let engine = Matter.Engine.create({enableSleeping:false})   
    let world=engine.world
    engine.gravity.y=0.4

    return{
        physics:{engine, world},
        Mario:Mario(world, {x:100,y:250},{height:80,width:55}),
        Floor:Floor(world,0xF3AA60, {x:width,y:height},{height:60,width:1000}),
        Floor2:Floor(world,0xF3AA60, {x:width + 1120 ,y:height},{height:60,width:1000}),


        Tube1:Tube(world,0xF3AA60, {x:700,y:height-130},{height:200,width:90}),

        Stairs1:Stairs(world,0xF3AFFF, {x:width-120 ,y:height-50},{height:40,width:40}),
        Stairs2:Stairs(world,0xF3AFFF, {x:width-80 ,y:height-50},{height:40,width:40}),
        Stairs3:Stairs(world,0xF3AFFF, {x:width-80 ,y:height-90},{height:40,width:40}),
        Stairs4:Stairs(world,0xF3AFFF, {x:width-40 ,y:height-50},{height:40,width:40}),
        Stairs5:Stairs(world,0xF3AFFF, {x:width-40 ,y:height-90},{height:40,width:40}),
        Stairs6:Stairs(world,0xF3AFFF, {x:width-40 ,y:height-130},{height:40,width:40}),
        Stairs7:Stairs(world,0xF3AFFF, {x:width+160 ,y:height-50},{height:40,width:40}),
        Stairs8:Stairs(world,0xF3AFFF, {x:width+160 ,y:height-90},{height:40,width:40}),
        Stairs9:Stairs(world,0xF3AFFF, {x:width+160 ,y:height-130},{height:40,width:40}),
        Stairs10:Stairs(world,0xF3AFFF, {x:width+200 ,y:height-50},{height:40,width:40}),
        Stairs11:Stairs(world,0xF3AFFF, {x:width+200 ,y:height-90},{height:40,width:40}),
        Stairs12:Stairs(world,0xF3AFFF, {x:width+240 ,y:height-50},{height:40,width:40}),


        MysteryBrick1:MysteryBrick(world,0xF3AFFF, {x:width+240 ,y:height-150},{height:40,width:40}),

    }
} 