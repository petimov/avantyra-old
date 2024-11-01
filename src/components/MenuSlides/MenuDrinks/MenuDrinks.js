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
                    <th>TEPLÉ NÁPOJE</th>
                </tr>
                <tr>
                    <td>čaj porcovaný</td>
                    <td></td>
                    <td>35,-</td>
                </tr>
                <tr>
                    <td>čaj zázvorový</td>
                    <td></td>
                    <td>45,-</td>
                </tr>
                <tr>
                    <td>svařený džus jablko/hruška</td>
                    <td></td>
                    <td>40,-</td>
                </tr>
                <tr>
                    <td>horká čokoláda</td>
                    <td></td>
                    <td>55,-</td>
                </tr>
                <tr>
                    <td>- se šlehačkou</td>
                    <td></td>
                    <td>65,-</td>
                </tr>
                <tr>
                    <td>grog</td>
                    <td>0,2l</td>
                    <td>50,-</td>
                </tr>
                <tr>
                    <td>horká griotka</td>
                    <td>0,2l</td>
                    <td>45,-</td>
                </tr>
                <tr>
                    <td>svařák</td>
                    <td>0,2l</td>
                    <td>55,-</td>
                </tr>
                {/* space */}
                <tr></tr>
                <tr >
                    <td colSpan={3} className='image'></td>
                </tr>
                <tr>
                    <th>PIVO</th>
                </tr>
                <tr>
                    <td>proud</td>
                    <td>0,33l</td>
                    <td>48,-</td>
                </tr>
                <tr>
                    <td>birell</td>
                    <td>0,5l</td>
                    <td>35,-</td>
                </tr>
                <tr>
                    <td>frisco</td>
                    <td>0,33l</td>
                    <td>45,-</td>
                </tr>
                {/* SPACE */}
                <tr></tr>
                <tr >
                    <td colSpan={3} className='image'></td>
                </tr>
                <tr>
                    <th>VÍNO</th>
                </tr>
                <tr>
                    <td>bílé - dle nabídky</td>
                    <td>0,1l</td>
                    <td>28,-</td>
                </tr>
                <tr>
                    <td>červené - dle nabídky</td>
                    <td>0,1l</td>
                    <td>28,-</td>
                </tr>
                <tr>
                    <td>prosecco</td>
                    <td>0,1l</td>
                    <td>29,-</td>
                </tr>
                <tr>
                    <td>levandulové prosecco</td>
                    <td>0,1l</td>
                    <td>48,-</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default MenuCoffee