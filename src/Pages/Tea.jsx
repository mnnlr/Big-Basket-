import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function Tea() {
    const cards = [
        {
            name: 'Tea',
            price: 1476,
            price2: 1800,
            pack: '45% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/1204491_1-taj-mahal-tea.jpg?tr=w-1920,q=80'

        },
        {
            name: 'Leaf Tea',
            price: 880,
            price2: 1190,
            pack: '65% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/1204483_2-tata-tea-gold-leaf-tea.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Tea Natural Care',
            price: 995,
            price2: 1205,
            pack: '12% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/1204490_1-red-label-tea-natural-care.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Tea Premium',
            price: 570,
            price2: 700,
            pack: '55% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/40199390_2-tata-tea-premium-tea.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Gold',
            price: 1600,
            pack: '49% OFF',
            price2: 1800,
            image: 'https://www.bigbasket.com/media/uploads/p/m/40325616_1-tata-tea-gold-instant-liquid-tea-premix-lemon-honey.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Leag Tea-Strong',
            price: 444,
            price2: 220,
            pack: '32% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/20003982_4-wagh-bakri-premium-leaf-tea.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Tea',
            price: 544,
            price2: 620,
            pack: '99% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/264437_2-tata-tea-kanan-devan-tea.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Green Tea',
            price: 1884,
            price2: 2000,
            pack: '89% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/40270718_1-emperia-green-tea-sampler-with-plain-tulsi-lemon-honey.jpg?tr=w-1920,q=80'
        },
        {
            name: 'Labal Black',
            price: 1994,
            price2: 2220,
            pack: '91% OFF',
            image: 'https://www.bigbasket.com/media/uploads/p/m/262811_17-lipton-yellow-label-tea-finest-blend.jpg?tr=w-1920,q=80',
        },
    ]
    const data = [
        {
            title: "Brands",
            input: "18 herbs",
            input2: "9t9",
            input3: "6rasa",
            input4: "3 Roses",
            input5: "24 Mantra Oranic",
            input6: "1868 by tata tea",
            input7: "Akhya",
            input8: "All in One",
            input9: "Amar"
        },
        {
            title: "Price",
            input: "Less than ₹ 20",
            input2: "₹ 21 to ₹ 50",
            input3: "₹ 51 to ₹ 100",
            input4: "₹ 101 to ₹ 200",
            input5: "₹ 201 to ₹ 500",
            input6: "More than ₹ 500",
        },
        {
            title: "Discount",
            input: "Upto 5%",
            input2: "5% - 10%",
            input3: "10% - 15%",
            input4: "15% - 25%",
            input5: "25%-30%",
            input6: "More than 25%",
        },
        {
            title: "Allergen Info",
            input: "Fish Free",
            input2: "Gluten Free",
            input3: "No Added Sugar",
            input4: "Nut Free",
            input5: "More than 25%",
            input6: "Added Sugar",
        },
        {
            title: "Pack Size",
            input: "Combo 2 items",
            input2: "Combo 2 Items",
            input3: "80 g (25 Bags x 3.2 g",
            input4: "80 g (25 Teabags x 3.2g)",
            input5: "80 g (25 Teabags x 2g)",
            input6: "80 g (50 Bags x 1.6 g Each)",
        },
        {
            title: "Tea Nature",
            input: "Tea bags",
            input2: "Green Tea",
            input3: "Leaf & Dust",
            input4: "Gold",
            input5: "Exotic ",
            input6: " Flavoured",
        },
        {
            title: "Product Type",
            input: "Combo",
            input2: "Multipack",
            input3: "Organic",
            input4: "Gold",
            input5: "2Combo ",
            input6: "SuperSaver",
        },
        {
            title: "Infusion Type",
            input: " bags",
            input2: "Multipack",
            input3: "Tea Mix",
            input4: "Steep Infusion",
            input5: "2Combo ",
            input6: "SuperSaver",
        },
    ]
    const [add, setAdd] = useState(null)
    const handleClick = (e) => {
        if (add === e) {
            return setAdd(null)
        } else {
            setAdd(e)
        }
    }
    return (
        <>
            <Container className=' ml-10'>
                <Row >
                    <Col sm={3} className='border-3 bg-slate-50 overflow-y-clip scroll-px-1.5'> <h5 className='text-2xl m-4 '>Shop by Category</h5>
                        <div>
                            <ul typeof='null' className='text-xl  cursor-pointer'>
                                <li>fruits   </li>
                                <li>Tea</li>
                                <li>Nandini</li>
                                <li>Vegetables</li>
                            </ul>
                        </div>
                        <div className="">
                            <div className='flex justify-center '>
                                <div className=''>
                                    {
                                        data.map((item, e) => (
                                            <div className='border-2 border-slate-400 mb-7 py-1 px-1'>
                                                <div className='flex justify-between  cursor-pointer px-0' onClick={() => handleClick(e)}>
                                                    <h4 className=''>{item.title}</h4>
                                                    <span>{add === e ? '-' : '+'}</span>
                                                </div>
                                                <div className={add === e ? '+' : 'para'}>
                                                    <div className='mr-10'>
                                                        <ul typeof='null' className='text-xl  cursor-pointer ' >
                                                            <li><input type='checkbox' className='border-slate-400' />{item.input}</li>
                                                            <li><input type='checkbox' className='border-slate-400' />{item.input2}</li>
                                                            <li><input type='checkbox' className='border-slate-400' />{item.input3}</li>
                                                            <li><input type='checkbox' className='border-slate-400' />{item.input4}</li>
                                                            <li><input type='checkbox' className='border-slate-400' />{item.input5}</li>
                                                            <li><input type='checkbox' className='border-slate-400' />{item.input6}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={8} className=''>
                        <div className='w-3/5 m-auto'>
                            <h2 className='text-5xl ' >
                                <b>Tea</b></h2>

                        </div>
                        <div className='cardcenterr'>
                            {
                                cards.map((card, i) => (

                                    <div key={i} className='cardd relative'>
                                        <img src={card.image} height="200px" width="192px" className='card-img-topp object-cover' alt="..." />
                                        <span className="absolute top-1 left-1 bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded-br-lg">
                                            {card.pack}
                                        </span>
                                        <div className='card-bodyy'>{card.name}</div>
                                        <select className='card-selectt'>
                                            <option>1kg</option>
                                            <option>2kg</option>
                                            <option>3kg</option>
                                            <option>4kg</option>
                                            <option>5kg</option>
                                        </select>
                                        <div className='card-bodyy' ><p>₹{card.price} <span className='plinee'>₹{card.price2}</span></p></div>
                                        <button className='card-buttonn'>Add</button>

                                    </div>
                                ))}
                        </div>

                    </Col>
                </Row>

            </Container>







        </>
    )
}
