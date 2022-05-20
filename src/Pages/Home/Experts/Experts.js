import React from 'react';

import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts=[
    {id:1,name:'will-smith',img:expert1},
    {id:2,name:'Roninson',img:expert2},
    {id:3,name:'Salman',img:expert3},
    {id:4,name:'Rafsan',img:expert4},
    {id:5,name:'Leonardo',img:expert5},
    {id:6,name:'Chris-rock',img:expert6},
]

const Experts = () => {
    return (
        <div id="experts" className='container'>
            <h2 className='text-primary text-center'>Our Experts</h2>
            <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3'>
                {
                    experts.map(expert=><Expert key={expert.id} 
                        expert={expert}
                    >
                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;