import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem/StatisticsItem'
import getRandomHexColor from '../../js/getRandomColor'
import s from './Statistics.module.css'

function Statistics({title, stats}) {
 return <section className={s.section}>
     
   {title &&(<h2 className={s.title}>{title}  </h2>)}
 
  <ul className={s.statList}>
      {stats.map(stat =>  
      ( <li className={s.item} key={stat.id} style={{backgroundColor: getRandomHexColor()}}>
        <StatisticsItem
          label={stat.label}
         percentage={stat.percentage}
        />
        </li> 
      ))}
  </ul>
</section> 
}

Statistics.propTypes = {
        title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
          id:PropTypes.number.isRequired,
        })).isRequired,
 } 




export default Statistics;