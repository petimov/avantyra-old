import React from 'react'
import '../Menu.css'

const MenuCoffee = () => {
  return (
    <div className='menu'>
        <table className='menu-table'>
            <tbody>
                <tr >
                    <td colSpan={3} className='image'></td>
                </tr>
                <tr>
                    <th>KÁVA</th>
                </tr>
                <tr>
                    <td>espresso/lungo</td>
                    <td>8g</td>
                    <td>45,-</td>
                </tr>
                <tr>
                    <td>espresso macchiato</td>
                    <td>8g</td>
                    <td>48,-</td>
                </tr>
                <tr>
                    <td>doppio</td>
                    <td>16g</td>
                    <td>60,-</td>
                </tr>
                <tr>
                    <td>cappuccino</td>
                    <td>16g</td>
                    <td>55,-</td>
                </tr>
                <tr>
                    <td>cappuccino grande</td>
                    <td>16g</td>
                    <td>75,-</td>
                </tr>
                <tr>
                    <td>latte macchiato</td>
                    <td>8g</td>
                    <td>60,-</td>
                </tr>
                <tr>
                    <td>český turek</td>
                    <td>8g</td>
                    <td>40,-</td>
                </tr>
                <tr>
                    <td>vídeňská káva</td>
                    <td>8g</td>
                    <td>60,-</td>
                </tr>
                <tr>
                    <td>alžírská káva</td>
                    <td>8g</td>
                    <td>70,-</td>
                </tr>
                <tr>
                    <td>irská káva</td>
                    <td>8g</td>
                    <td>80,-</td>
                </tr>
                {/* space */}
                <tr></tr>
                <tr>
                    <td>mléko pro děti</td>
                    <td>0,1l</td>
                    <td>25,-</td>
                </tr>
                <tr>
                    <td>mléko ke kávě</td>
                    <td></td>
                    <td>3,-</td>
                </tr>
                <tr>
                    <td>porce šlehačky</td>
                    <td></td>
                    <td>15,-</td>
                </tr>
                <tr>
                    <td>med</td>
                    <td></td>
                    <td>12,-</td>
                </tr>
                <tr>
                    <td>alternativní mléko</td>
                    <td></td>
                    <td>+5,-</td>
                </tr>
                {/* SPACE */}
                <tr></tr>
                <tr>
                    <td>espresso na ledu</td>
                    <td>8g</td>
                    <td>45,-</td>
                </tr>
                <tr>
                    <td>espresso tonic</td>
                    <td>8g</td>
                    <td>60,-</td>
                </tr>
                <tr>
                    <td>ledové latte</td>
                    <td>8g</td>
                    <td>60,-</td>
                </tr>
                <tr>
                    <td>- se zmrzlinou</td>
                    <td>8g</td>
                    <td>70,-</td>
                </tr>
                <tr>
                    <td>- se zmrzlinou a šlehačkou</td>
                    <td>8g</td>
                    <td>80,-</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default MenuCoffee