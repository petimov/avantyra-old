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
                    <th>NEALKO NÁPOJE</th>
                </tr>
                <tr>
                    <td>džus jablko/hruška</td>
                    <td>0,1l</td>
                    <td>15,-</td>
                </tr>
                <tr>
                    <td>domácí limonáda</td>
                    <td>0,3l/0,5l</td>
                    <td>45/65,-</td>
                </tr>
                <tr>
                    <td>tonic</td>
                    <td>0,1l</td>
                    <td>15,-</td>
                </tr>
                <tr>
                    <td>voda</td>
                    <td>0,3/0,5/0,8</td>
                    <td>10,-/15,-/20,-</td>
                </tr>
                {/* SPACE */}
                <tr>
                    <th>ALKO NÁPOJE</th>
                </tr>
                <tr>
                    <td>vaječňák</td>
                    <td>0,04l</td>
                    <td>35,-</td>
                </tr>
                <tr>
                    <td>božkov republica</td>
                    <td>0,04l</td>
                    <td>50,-</td>
                </tr>
                <tr>
                    <td>griotka</td>
                    <td>0,04l</td>
                    <td>35,-</td>
                </tr>
                <tr>
                    <td>tullamore dow</td>
                    <td>0,04l</td>
                    <td>50,-</td>
                </tr>
                {/* space */}
                <tr></tr>
                <tr >
                    <td colSpan={3} className='image'></td>
                </tr>
                <tr>
                    <th>NĚCO NA ZUB</th>
                </tr>
                <tr>
                    <td>toust s mozzarellou a<br></br> bazalkovým pestem,
                        obloha</td>
                    <td></td>
                    <td>65,-</td>
                </tr>
                <tr>
                    <td>nachos se zakys. smetanou</td>
                    <td></td>
                    <td>70,-</td>
                </tr>
                <tr>
                    <td>nachos</td>
                    <td></td>
                    <td>35,-</td>
                </tr>
                <tr>
                    <td>rakvička se šlehačkou</td>
                    <td></td>
                    <td>30,-</td>
                </tr>
                <tr>
                    <td>vanilková zmrzlina</td>
                    <td></td>
                    <td>20,-</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default MenuCoffee