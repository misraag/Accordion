import React, { useEffect, useState } from 'react'
import styles from './Accordion.module.css'
import data from './data'


function Accordion () {

    const [selected, setSelected] = useState(null);
    const [multiAccordion, setMultiAccordion] = useState(false);
    const [buttontext, setButtonText] = useState('Enable Multi Accordion')
    const [buttonColor, setButtonColor] = useState('turquoise');
    const [multiArray, setMultiArray] = useState([]);

   

    function handleEnableMultiAccordion() {
        setMultiAccordion((prevMultiAccordion) => !prevMultiAccordion);
    

        if (!multiAccordion) {
            // If multiAccordion was previously false, now it's true
            setButtonText('Disable Multi Accordion');
            setButtonColor('rgb(211, 248, 0)'); // Set color to green
        } else {
            // If multiAccordion was previously true, now it's false
            setButtonText('Enable Multi Accordion');
            setButtonColor('turquoise'); // Set color to turquoise
        }
      }

    function handleSingleAccordion (id) {
        setSelected(selected === id ? null : id);
    }

    
        // This function will run after the state has been updated
      
      
    function handleMultiAccordion (id) {
        // useEffect(() => {
        let cpyMultiArray = [...multiArray];
        const findIndexOfCurrentId = cpyMultiArray.indexOf(id);

        if(findIndexOfCurrentId === -1 ) {
            cpyMultiArray.push(id)
        } else {
            cpyMultiArray.splice(findIndexOfCurrentId, 1);
        }
        setMultiArray(cpyMultiArray);
        console.log("Current array is " + multiArray);

        console.log("Index of current id is " + findIndexOfCurrentId);
        console.log(multiAccordion);
    // }, [multiAccordion]);

    }

    return (
        <div className={styles.wrapper}>
            <button onClick={() => handleEnableMultiAccordion()} className={styles.enablebutton} style={{backgroundColor: buttonColor}}>{buttontext}</button>

   
            <div className={styles.accordion}>
                {
                data && data.length > 0 ? 
                data.map(dataItem => (
                    <div className={styles.item}>
                        <div onClick={multiAccordion ? () => handleMultiAccordion(dataItem.id) : () => handleSingleAccordion(dataItem.id)} className={styles.dataitem}>
                            <h1>{dataItem.ques}</h1>
                            <span className={styles.plus}>+</span>
                        </div>
                        {
                            // selected === dataItem.id ? (
                            //     <div className={styles.ans}>
                            //         {dataItem.ans}
                            //     </div>

                            // ) : null 

                            multiAccordion ? multiArray.indexOf(dataItem.id) !== -1 &&
                            (<div className={styles.ans}>
                                {dataItem.ans}
                            </div>) :  selected === dataItem.id && (
                                    <div className={styles.ans}>
                                        {dataItem.ans}
                                    </div>
                            )
                        }
                    </div>
                    )
                ): <div>No data found</div>
                
                }
            </div>
        </div>
    )
};

export default Accordion