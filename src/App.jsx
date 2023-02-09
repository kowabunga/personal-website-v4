function App() {
  return (
    <>
      <header className='w-full flex flex-center flex-column'>
        <div className='profile-outer'>
          <img
            className='profile'
            src='../src/assets/278987322_353578783257844_1431226512088762579_n.jpg'
          />
        </div>
      </header>
      <main className='flex flex-center flex-column'>
        <section className='first-section-margin flex flex-gap section-intro-border'>
          <div>
            <h1 className='lead'>Hi, I'm Anthony. </h1>
            <p>
              A full stack web developer and I'm ready to take on the world.
            </p>
            <p>
              Feel free to take a look at my projects below to see what I'm up
              to.
            </p>
          </div>
        </section>

        <section className='section-margin'>
          <div className='flex project-flex'>
            <div className='flex flex-column projects-width'>
              <h2 className='lead'>Projects</h2>
              <p>
                Look at all these projects. If any of these draw your interest,
                don't hesistate to contact me below!
              </p>
            </div>

            <img
              className='project-img-width'
              src='https://i.imgur.com/yvSTuUu.png'
            />
          </div>

          <div className='flex flex-around flex-wrap'>
            <div className='card flex flex-column flex-around'>
              <div className='card-title'>Lorem ipsum dolor sit amet.</div>
              <div className='card-body text-small'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                inventore esse ipsam possimus? Quaerat, inventore!
              </div>
              <div className='card-footer flex flex-around'>
                <a href='#'>
                  <button className='button'>View Live</button>
                </a>
                <a href='#'>
                  <button className='button'>View Code</button>
                </a>
              </div>
            </div>

            <div className='card flex flex-column flex-around'>
              <div className='card-title'>Lorem ipsum dolor sit amet.</div>
              <div className='card-body text-small'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                inventore esse ipsam possimus? Quaerat, inventore!
              </div>
              <div className='card-footer flex flex-around'>
                <a href='#'>
                  <button className='button'>View Live</button>
                </a>
                <a href='#'>
                  <button className='button'>View Code</button>
                </a>
              </div>
            </div>

            <div className='card flex flex-column flex-around'>
              <div className='card-title'>Lorem ipsum dolor sit amet.</div>
              <div className='card-body text-small'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                inventore esse ipsam possimus? Quaerat, inventore!
              </div>
              <div className='card-footer flex flex-around'>
                <a href='#'>
                  <button className='button'>View Live</button>
                </a>
                <a href='#'>
                  <button className='button'>View Code</button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className='lead'>Skills</h2>
          <ul className='skills-ul'>
            <li>
              <i className='fab fa-github-square fa-4x flex-column'></i>
              <p>GitHub</p>
            </li>
            <li>
              <i className='fab fa-css3-alt fa-4x flex-column'></i>
              <p>CSS</p>
            </li>
            <li>
              <i className='fab fa-sass fa-4x flex-column'></i>
              <p>SCSS</p>
            </li>
            <li>
              <i className='fab fa-js-square fa-4x flex-column'></i>
              <p>JavaScript</p>
            </li>
            <li>
              <i className='fab fa-react fa-4x flex-column'></i>
              <p>React</p>
            </li>
            <li>
              <i className='fab fa-git-alt fa-4x flex-column'></i>
              <p>Git</p>
            </li>
            <li>
              <i className='fab fa-bootstrap fa-4x flex-column'></i>
              <p>Bootstrap</p>
            </li>
            <li>
              <i className='fas fa-terminal fa-4x flex-column'></i>
              <p>CLI</p>
            </li>
          </ul>
        </section>

        <section className='flex flex-between form-section section-margin'>
          <img src='https://i.imgur.com/24wpDTl.png' className='form-img' />
          <div className='mw'>
            <h2>Reach out</h2>
            <p>
              Questions? Concerns? Anything else? Send me a message and I'll
              respond as soon as I can.
            </p>
            <form className='form'>
              <div className='flex flex-column text-small form-field'>
                <label for='name'>Name</label>
                <input type='name' required />
              </div>

              <div className='flex flex-column text-small form-field'>
                <label for='name'>Email</label>
                <input type='email' required />
              </div>

              <div className='flex flex-column text-small form-field'>
                <label for='name'>Company (optional)</label>
                <input type='text' />
              </div>

              <div className='flex flex-column text-small form-field'>
                <label for='name'>Preferred time to contact</label>
                <input type='text' required />
              </div>

              <input type='submit' value='Submit' className='button' />
            </form>
          </div>
        </section>
      </main>
      <footer className='flex flex-gap flex-center first-section-margin h-25'>
        <div className='flex flex-column flex-center'>
          <a href='#'>
            <i className='bi bi-github icon-size icon-left'></i>
          </a>
          <a href='#'>
            <i className='bi bi-linkedin icon-size icon-right'></i>
          </a>
        </div>
        <div className='flex flex-column flex-around h-f-s'>
          <p className='bold'>Anthony Does Web Stuff</p>
          <a href='#'>555-555-5555</a>
          <a href='#'>anthony@webstuff.com</a>
        </div>
      </footer>
    </>
  );
}

export default App;
