import { Component, Host, h, Prop,getAssetPath, State} from '@stencil/core';

@Component({
  tag: 'sgds-masthead',
  styleUrl: 'sgds-masthead.scss',
  shadow: true,
  assetsDirs: ['assets']
})
export class SgdsMasthead {

  @Prop() sgCrest = "sg-crest.svg";
  @Prop() chevron = "chevron-up.svg";
  /** for full width masthead, add attribute `fluid` */
  @Prop() fluid:boolean;
  @State() isOpen:boolean = false;

  handleCloseClick() {
    this.isOpen = !this.isOpen;
  }

  render() {
    return (
      <Host>
        <div class="sgds-masthead">
          <div 
            class={{
              'container' : true,
              'is-fluid': this.fluid === true
            }}
          >
            <div class="columns">
              <div class="column is-12 has-text-centered-touch">
              <div class="masthead-layout">
                    <img class="sg-crest" src={getAssetPath(`./assets/img/${this.sgCrest}`)}  alt="Singapore crest" />
                    <div class="is-text">A Singapore Government Agency Websites</div>        
                    <div 
                      class="sgds-masthead-button" 
                      id="sgds-masthead-identify" 
                      onClick={this.handleCloseClick.bind(this)}
                    >
                        <span class="is-text sgds-masthead-button-text link-color">
                            How to identify
                        </span>
                        <img src={getAssetPath(`./assets/img/${this.chevron}`)} alt=""          
                        class={this.isOpen ? 'sgds-masthead-identify-icon' : 'sgds-masthead-identify-icon open'}
                        />
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class={this.isOpen ? 'container sgds-masthead-content' : 'container sgds-masthead-content hide'}
          >
            <div class="columns">
                <div class="column">
                {/* content-grid */}
                <div class="content-grid">
                  {/* column-wrapper */}
                  <div class="column-wrapper">
                    <div class="icon">
                      <img src="https://d33wubrfki0l68.cloudfront.net/2ec2122b2010672b9cbb6efb5138048d8aff4a09/5d1ab/assets/img/government_building.svg" class="banner-icon"/>
                    </div>
                    <div class="content">
                      <div class="title">
                        Official website links end with .gov.sg
                      </div>
                      <article>
                        Government agencies communicate via .gov.sg websites (e.g. go.gov.sg/open).
                        <a href="https://https://www.gov.sg/trusted-sites#govsites" class="trusted-websites-link" rel="noreferrer" target="_blank">
                          Trusted websites
                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32" class="trusted-websites-icon">
                          <title>Trusted websites</title>
                          <path d="M18.667 4v2.667h4c0.186-0.020 0.374-0.020 0.56 0l-2.667 2.667-6.973 6.987 1.88 1.88 9.733-9.667c0.092 0.257 0.137 0.528 0.133 0.8v4h2.667v-9.333h-9.333z"></path>
                          <path d="M22.667 25.333h-16v-16h8v-2.667h-8c-1.473 0-2.667 1.194-2.667 2.667v16c0 1.473 1.194 2.667 2.667 2.667h16c1.473 0 2.667-1.194 2.667-2.667v-8h-2.667v8z"></path>
                          </svg>
                        </a>
                      </article>
                    </div>
                  </div>
                  {/* end column-wrapper */}
                  {/* column-wrapper */}
                  <div class="column-wrapper">
                    <div class="icon">
                      <img src="https://d33wubrfki0l68.cloudfront.net/aecdf1b88c0edfa72e7fef099f28e93b80c8336a/8c6a1/assets/img/lock.svg" class="banner-icon"/>
                    </div>
                    <div class="content">
                      <div class="title">
                        Secure websites use HTTPS
                      </div>
                      <article>
                        Look for a<strong> lock </strong>(<img src="https://d33wubrfki0l68.cloudfront.net/aecdf1b88c0edfa72e7fef099f28e93b80c8336a/8c6a1/assets/img/lock.svg" class="banner-icon-inline"/>) or https:// as an added precaution. Share sensitive information only on official, secure websites.
                      </article>
                    </div>
                  </div>
                  {/* end column-wrapper */}
                </div>
                {/* content-grid */}
                </div>
              </div>
            </div>
          </div>

      </Host>
    );
  }

}
