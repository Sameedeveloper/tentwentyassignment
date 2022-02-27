import './App.css'

function App() {
  return (
    <div className='desktopLayoutSet'>
      <div className='mainLandingPage'>
        <header className='headerMobile'>
          <img src='../MobileImages/LogoMobile.png' alt='logo' />
          <div className='desktopHeaderPart'>
            <a className='desktopExtraLinks' href=''>
              Private Clients
            </a>
            <a className='desktopExtraLinks' href=''>
              Corporates
            </a>
            <a className='desktopExtraLinks' href=''>
              Insights
            </a>
            <a className='desktopExtraLinks' href=''>
              Contact
            </a>
            <a className='desktopExtraLinks' id='aboutLink' href=''>
              About
            </a>
            <a className='desktopExtraLinks' href=''>
              Careers
            </a>
            <a href=''>
              <img src='../DesktopImages/SearchIconDesktop.png' alt='' />
            </a>
          </div>
          <a id='meetingBtn' href='#'>
            Book A meeting
          </a>
          <a href='#' id='dropdownIcon'>
            <img src='../MobileImages/DropdownIcon.png' alt='drop down icon' />
          </a>
        </header>
        <section className='bottomSectionMLP'>
          <h1>If not now, then when?</h1>
          <h2>Time to make your wealth work for you</h2>
        </section>
      </div>

      <div className='secondViewHeight'>
        <header className='headerMobileSecond'>
          <img src='../MobileImages/LogoMobile.png' alt='logo' />
          <div className='desktopHeaderPart'>
            <a className='desktopExtraLinks' href=''>
              Private Clients
            </a>
            <a className='desktopExtraLinks' href=''>
              Corporates
            </a>
            <a className='desktopExtraLinks' href=''>
              Insights
            </a>
            <a className='desktopExtraLinks' href=''>
              Contact
            </a>
            <a className='desktopExtraLinks' id='aboutLink' href=''>
              About
            </a>
            <a className='desktopExtraLinks' href=''>
              Careers
            </a>
            <a href=''>
              <img
                id='searchIconSecondView'
                src='../DesktopImages/SearchIconDesktop.png'
                alt=''
              />
            </a>
          </div>
          <a id='meetingBtn' href='#'>
            Book A meeting
          </a>
          <a href='#' id='dropdownIconSecond'>
            <img src='../MobileImages/DropdownIcon.png' alt='drop down icon' />
          </a>
        </header>
        <img id='mountainImage' src='../MobileImages/MountainPeak.jpg' alt='' />
        <p id='firstTagLine'>
          Building a lasting legacy for individuals, families and businesses
          globally
        </p>
        <div id='tenseGuyImage'>
          <img src='../MobileImages/TenseGuy.jpg' alt='' />
        </div>
        <div id='tenseGuyImageDesktop'>
          <img src='../DesktopImages/TenseGuy.jpg' alt='' />
        </div>
        <p id='businessHeading' data-heading='business'>
          Business
        </p>
        <img
          id='backpackWomanImage'
          src='../MobileImages/BackpackWomen.jpg'
          alt=''
        />
        <img
          id='coupleTreesImage'
          src='../MobileImages/CoupleTrees.jpg'
          alt=''
        />
        <img
          id='coupleTreesImageDesktop'
          src='../DesktopImages/TreesBackground.jpg'
          alt=''
        />
      </div>

      <div className='finalSection'>
        <header className='headerMobile'>
          <img src='../MobileImages/LogoMobile.png' alt='logo' />
          <div className='desktopHeaderPart'>
            <a className='desktopExtraLinks' href=''>
              Private Clients
            </a>
            <a className='desktopExtraLinks' href=''>
              Corporates
            </a>
            <a className='desktopExtraLinks' href=''>
              Insights
            </a>
            <a className='desktopExtraLinks' href=''>
              Contact
            </a>
            <a className='desktopExtraLinks' id='aboutLink' href=''>
              About
            </a>
            <a className='desktopExtraLinks' href=''>
              Careers
            </a>
            <a href=''>
              <img src='../DesktopImages/SearchIconDesktop.png' alt='' />
            </a>
          </div>
          <a id='meetingBtn' href='#'>
            Book A meeting
          </a>
          <a href='#' id='dropdownIconSecond'>
            <img src='../MobileImages/DropdownIcon.png' alt='drop down icon' />
          </a>
        </header>
        <h2>
          Success stories
          <br /> our capabilities in action
        </h2>
        <div id='linksContainer'>
          <a class='links' href=''>
            Private Clients
          </a>
          <a class='links' href=''>
            Corporates
          </a>
          <a class='links' href=''>
            Insights
          </a>
          <a class='links' href=''>
            Contact
          </a>
        </div>
        <img id='sunVectorDesktop' src='../MobileImages/SunVector.png' alt='' />
        <div id='containerCoupleImage'>
          <img
            id='smilingCoupleImage'
            src='../MobileImages/SmilingCouple.jpg'
            alt=''
          />
          <div id='inquirySticker'>
            Make
            <br /> Inquiry
          </div>{' '}
        </div>
        <div id='diversifyingTag'>Diversifying</div>
        <div id='diversifyingForTag'>Diversifying for</div>

        <div id='secureTag'>Secure Future</div>
        <div id='secureTagDesktop'>More Secure Future</div>

        <p id='diversifyingLine'>Diversifying for a more secure future.</p>
      </div>
    </div>
  )
}

export default App
