import Matter from 'matter-js'
import Mario from './components/Mario'
import Floor from './components/Floor'
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');



const Physics = (entities, { touches, time, dispatch }) => {
    let engine = entities.physics.engine

    touches.forEach(touch => {
        if (touch.type === 'longpress' || touch.type === 'press') {

            if (touch.event.pageX < width / 3 && entities.Mario.body.position.x >= 100) {
                Matter.Body.translate(entities['Floor'].body, { x: +20, y: 0 });
                Matter.Body.translate(entities['Floor2'].body, { x: +20, y: 0 });
                Matter.Body.translate(entities['Floor3'].body, { x: +20, y: 0 });

                Matter.Body.translate(entities['Stairs1'].body, { x: +20, y: 0 });
                Matter.Body.translate(entities['Stairs2'].body, { x: +20, y: 0 });
                Matter.Body.translate(entities['Stairs3'].body, { x: +20, y: 0 });
                Matter.Body.translate(entities['Stairs4'].body, { x: +20, y: 0 });
                Matter.Body.translate(entities['Stairs5'].body, { x: +20, y: 0 });
                Matter.Body.translate(entities['Stairs6'].body, { x: +20, y: 0 });

                Matter.Body.translate(entities['Stairs7'].body, { x: +20, y: 0 });
                Matter.Body.translate(entities['Stairs8'].body, { x: +20, y: 0 });
                Matter.Body.translate(entities['Stairs9'].body, { x: +20, y: 0 });
                Matter.Body.translate(entities['Stairs10'].body, { x: +20, y: 0 });
                Matter.Body.translate(entities['Stairs11'].body, { x: +20, y: 0 });
                Matter.Body.translate(entities['Stairs12'].body, { x: +20, y: 0 });

                Matter.Body.translate(entities['Tube1'].body, { x: +20, y: 0 });
                Matter.Body.translate(entities['Tube2'].body, { x: +20, y: 0 });
                Matter.Body.translate(entities['Tube3'].body, { x: +20, y: 0 });

                Matter.Body.translate(entities['MadMushroom1'].body, { x: +20, y: 0 });

                Matter.Body.translate(entities['MysteryBrick1'].body, { x: +20, y: 0 });
                Matter.Body.translate(entities['MysteryBrick2'].body, { x: +20, y: 0 });
                Matter.Body.translate(entities['NormalBrick1'].body, { x: +20, y: 0 });



            } else if (touch.event.pageX < (width / 3) * 2) {
                const marioVelocity = entities.Mario.body.velocity;
                if (marioVelocity.y < 0.01 && marioVelocity.y > -0.01) {
                    Matter.Body.setVelocity(entities.Mario.body, {
                        x: 0,
                        y: -10,
                    });
                }

            } else {
                Matter.Body.translate(entities['Floor'].body, { x: -20, y: 0 });
                Matter.Body.translate(entities['Floor2'].body, { x: -20, y: 0 });
                Matter.Body.translate(entities['Floor3'].body, { x: -20, y: 0 });

                Matter.Body.translate(entities['Stairs1'].body, { x: -20, y: 0 });
                Matter.Body.translate(entities['Stairs2'].body, { x: -20, y: 0 });
                Matter.Body.translate(entities['Stairs3'].body, { x: -20, y: 0 });
                Matter.Body.translate(entities['Stairs4'].body, { x: -20, y: 0 });
                Matter.Body.translate(entities['Stairs5'].body, { x: -20, y: 0 });
                Matter.Body.translate(entities['Stairs6'].body, { x: -20, y: 0 });

                Matter.Body.translate(entities['Stairs7'].body, { x: -20, y: 0 });
                Matter.Body.translate(entities['Stairs8'].body, { x: -20, y: 0 });
                Matter.Body.translate(entities['Stairs9'].body, { x: -20, y: 0 });
                Matter.Body.translate(entities['Stairs10'].body, { x: -20, y: 0 });
                Matter.Body.translate(entities['Stairs11'].body, { x: -20, y: 0 });
                Matter.Body.translate(entities['Stairs12'].body, { x: -20, y: 0 });

                Matter.Body.translate(entities['Tube1'].body, { x: -20, y: 0 });
                Matter.Body.translate(entities['Tube2'].body, { x: -20, y: 0 });
                Matter.Body.translate(entities['Tube3'].body, { x: -20, y: 0 });

                Matter.Body.translate(entities['MadMushroom1'].body, { x: -20, y: 0 });


                Matter.Body.translate(entities['MysteryBrick1'].body, { x: -20, y: 0 });
                Matter.Body.translate(entities['MysteryBrick2'].body, { x: -20, y: 0 });
                Matter.Body.translate(entities['NormalBrick1'].body, { x: -20, y: 0 });
                
            }
        }

        if (entities.Mario.body.position.x < 100) {
            Matter.Body.translate(entities['Mario'].body, { x: +20, y: 0 });
            
            Matter.Body.translate(entities['Floor'].body, { x: +20, y: 0 });
            Matter.Body.translate(entities['Floor2'].body, { x: +20, y: 0 });
            Matter.Body.translate(entities['Floor3'].body, { x: +20, y: 0 });

            Matter.Body.translate(entities['Stairs1'].body, { x: +20, y: 0 });
            Matter.Body.translate(entities['Stairs2'].body, { x: +20, y: 0 });
            Matter.Body.translate(entities['Stairs3'].body, { x: +20, y: 0 });
            Matter.Body.translate(entities['Stairs4'].body, { x: +20, y: 0 });
            Matter.Body.translate(entities['Stairs5'].body, { x: +20, y: 0 });
            Matter.Body.translate(entities['Stairs6'].body, { x: +20, y: 0 });

            Matter.Body.translate(entities['Stairs7'].body, { x: +20, y: 0 });
            Matter.Body.translate(entities['Stairs8'].body, { x: +20, y: 0 });
            Matter.Body.translate(entities['Stairs9'].body, { x: +20, y: 0 });
            Matter.Body.translate(entities['Stairs10'].body, { x: +20, y: 0 });
            Matter.Body.translate(entities['Stairs11'].body, { x: +20, y: 0 });
            Matter.Body.translate(entities['Stairs12'].body, { x: +20, y: 0 });

            Matter.Body.translate(entities['Tube1'].body, { x: +20, y: 0 });
            Matter.Body.translate(entities['Tube2'].body, { x: +20, y: 0 });
            Matter.Body.translate(entities['Tube3'].body, { x: +20, y: 0 });

            Matter.Body.translate(entities['MadMushroom1'].body, { x: +20, y: 0 });


            Matter.Body.translate(entities['MysteryBrick1'].body, { x: +20, y: 0 });
            Matter.Body.translate(entities['MysteryBrick2'].body, { x: +20, y: 0 });
            Matter.Body.translate(entities['NormalBrick1'].body, { x: +20, y: 0 });
            

        }

    });

    // touches.filter(t => t.type === 'press')
    //     .forEach(t => {
    //         Matter.Body.setVelocity(entities.Mario.body, {
    //             x: 0,
    //             y: -5,
    //         })

    //         Matter.Body.translate(entities['Floor'].body, { x: -5, y: 0 });
    //         Matter.Body.translate(entities['Floor2'].body, { x: -5, y: 0 });
    //         Matter.Body.translate(entities['Stairs1'].body, { x: -5, y: 0 });
    //         Matter.Body.translate(entities['Stairs2'].body, { x: -5, y: 0 });
    //         Matter.Body.translate(entities['Stairs3'].body, { x: -5, y: 0 });
    //         Matter.Body.translate(entities['Stairs4'].body, { x: -5, y: 0 });
    //         Matter.Body.translate(entities['Stairs5'].body, { x: -5, y: 0 });
    //         Matter.Body.translate(entities['Stairs6'].body, { x: -5, y: 0 });

    //         Matter.Body.translate(entities['Stairs7'].body, { x: -5, y: 0 });
    //         Matter.Body.translate(entities['Stairs8'].body, { x: -5, y: 0 });
    //         Matter.Body.translate(entities['Stairs9'].body, { x: -5, y: 0 });
    //         Matter.Body.translate(entities['Stairs10'].body, { x: -5, y: 0 });
    //         Matter.Body.translate(entities['Stairs11'].body, { x: -5, y: 0 });
    //         Matter.Body.translate(entities['Stairs12'].body, { x: -5, y: 0 });
    //     }
    //     )





    Matter.Engine.update(engine, time.delta)
    return entities;

}

export default Physics
