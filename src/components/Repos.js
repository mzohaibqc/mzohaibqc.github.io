import React, { useEffect, useState, useCallback } from 'react';
import OwlCarousel from 'react-owl-carousel';

import Section from './Section';
import GithubRepo from './GithubRepo/GithubRepo';

const PINNED_REPOS = {
  'antd-theme-generator': true,
  'antd-theme-webpack-plugin': true,
  'antd-live-theme': true,
  'antd-amplify-react': true,
  'react-app-rewire-antd-theme': true,
  'currency-converter-react-native': true,
};

export default function Repos() {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  const fetchRepos = useCallback(async () => {
    setLoading(true);
    try {
      const repos = await fetch(
        'https://api.github.com/users/mzohaibqc/repos'
      ).then((res) => res.json());
      console.log(': -------------------------');
      console.log('fetchRepos -> repos', repos);
      console.log(': -------------------------');
      setRepos(
        repos
          .filter((repo) => PINNED_REPOS[repo.name])
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
      );
    } catch (error) {
      setRepos([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);
  
  return (
    <Section id="open-source">
      <h1
        className="section-big-title til hidden-xs hidden-sm"
        data-in-effect="fadeInUp"
        data-out-effect="fadeInDown"
      >
        open source
      </h1>
      {loading && <i className="ion-spinner i-size-small"></i>}
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section-holder">
              <div className="text-center">
                <div className="icon-holder-center i-size-big">
                  <i className="ion-ios7-pulse"></i>
                </div>
              </div>
              <h3 className="text-center"> Open Source </h3>
              <div className="row">
              <OwlCarousel
                  className="testi-holder owl-theme"
                  loop
                  nav
                  items={2}
                  navText={[
                    '<span class="ion-ios7-arrow-left"></span>',
                    '<span class="ion-ios7-arrow-right"></span>'
                  ]}
                >
                {repos.map((repo) => (
                  <GithubRepo key={repo.id} {...repo} />
                ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
