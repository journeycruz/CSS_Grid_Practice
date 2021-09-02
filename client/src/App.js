import "./App.css";

function App() {
  return (
    <div className='wrapper'>
      <nav className='main-nav'>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Services</a>
          </li>
          <li>
            <a href='/'>Contact</a>
          </li>
        </ul>
      </nav>
      <section className='top-container'>
        <header className='showcase'>
          <h1>Your Web Presence</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            explicabo cupiditate quis quas ea cum?
          </p>
          <a href='/' className='btn'>
            Read More
          </a>
        </header>
        <div className='top-box top-box-a'>
          <h4>Membership</h4>
          <p className='price'>$199/mo</p>
          <a href='/' className='btn'>
            Buy Now
          </a>
        </div>
        <div className='top-box top-box-b'>
          <h4>Pro Membership</h4>
          <p className='price'>$299/mo</p>
          <a href='/' className='btn'>
            Buy Now
          </a>
        </div>
      </section>
      <section className='boxes'>
        <div className='box'>
          <h3>Analytics</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quo.
          </p>
        </div>
        <div className='box'>
          <h3>Support</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quo.
          </p>
        </div>{" "}
        <div className='box'>
          <h3>Marketing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quo.
          </p>
        </div>{" "}
        <div className='box'>
          <h3>Develpment</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quo.
          </p>
        </div>
      </section>
      <section className='info'>
        <img src='./images/pic1.jpeg' alt='pic1' />
        <div>
          <h2>Your Business On The Web</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ab
            iste quasi nobis repellat! Eius, quo voluptates autem asperiores
            laboriosam odio ipsum unde ea minus, nemo hic dolorem cumque
            aliquid?
          </p>
          <a href='/' className='btn'>
            Learn More
          </a>
        </div>
      </section>
      <section className='portfolio'>
        <img src="https://source.unsplash.com/random/200x200" alt="randomImg" />
        <img src="https://source.unsplash.com/random/201x200" alt="randomImg" />
        <img src="https://source.unsplash.com/random/203x200" alt="randomImg" />
        <img src="https://source.unsplash.com/random/204x200" alt="randomImg" />
        <img src="https://source.unsplash.com/random/205x200" alt="randomImg" />
        <img src="https://source.unsplash.com/random/206x200" alt="randomImg" />
        <img src="https://source.unsplash.com/random/207x200" alt="randomImg" />
        <img src="https://source.unsplash.com/random/208x200" alt="randomImg" />
        <img src="https://source.unsplash.com/random/209x200" alt="randomImg" />
      </section>
      <footer>
        <p>GridBiz &copy; 2021</p>
      </footer>
    </div>
  );
}

export default App;
