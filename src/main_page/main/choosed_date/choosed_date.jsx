import { useEffect } from 'react'
import './choosed_date.css'
import { useState } from 'react'
import Plan from '../today/plan'
import axios from '../../../api/axios'

export default function ChoosedDate({choosedDate}){
    const dayjs = require('dayjs')
    require('dayjs/locale/ru')
    dayjs.locale('ru')
    dayjs().format()
    var customParseFormat = require('dayjs/plugin/customParseFormat')
    dayjs.extend(customParseFormat)

    const [plans, setPlans] = useState([])
    const [isEmpty, setIsEmpty] = useState(false);
    useEffect(()=>{
        axios.get(`/tasks/tasks_by_date/${choosedDate}`)
        .then(data => {
            setPlans(data.data)
            let amount = (data.data).length;
            (amount === 0) ? setIsEmpty(true) : setIsEmpty(false);
        })
        .catch(err => console.log(err))
    },[])
    return(
        <div className='add_plan_container'>
                <div className='add_plan_header'>
                    <p>{dayjs(choosedDate).format('MMMM DD')}</p>
                </div>
                <div className='plans_horizontal'></div>
                <p className={isEmpty ? 'empty' : 'not_empty'}>Здесь пусто!</p>
                {[...plans].map((item, index)=>
                    <Plan key={item.id} header = {item.title} date = {dayjs(item.starts_at).format('MMMM DD')} 
                    time = {item.time} text = {item.content} ></Plan>
                )}
            </div>
    )
}