import React, { useState } from 'react'
import styles from './Accordion.module.css'
import data from './data'


function Accordion () {

    const [selected, setSelected] = useState(null);

    function handleClick (id) {
        setSelected(id);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.accordion}>
                {
                data && data.length > 0 ? 
                data.map(dataItem => (
                    <div className={styles.item}>
                        <div onClick={() => handleClick(selected === dataItem.id ? null : dataItem.id)} className={styles.dataitem}>
                            <h1>{dataItem.ques}</h1>
                            <span className={styles.plus}>+</span>
                        </div>
                        {
                            selected === dataItem.id ? (
                                <div className={styles.ans}>
                                    {dataItem.ans}
                                </div>

                            ) : null 
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