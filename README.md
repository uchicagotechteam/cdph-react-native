<a href="https://www.chicago.gov/city/en/depts/cdph.html"><img src="src/assets/NEWmedreportbackground.png" title="Health Chicago"></a>

# CDPH Reporting App
> A Health Reporting App for the Chicago Department of Public Health (CDPH)

[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger)

![screenshot](screenshots/screenshots.png)

## SETUP

`git clone https://github.com/JiaqiGao/cdph-react-native/`

We recommend to use yarn for better management of dependency versioning.

`brew install yarn`

`yarn install`

Otherwise you can also use npm to install packages.

`npm install`

Run the app in an iOS simulator with

`react-native run-ios`

If you get a bundle error, do
`react-native upgrade` and opt to keep your current .gitignore but replace the xproj

--

## CUSTOMIZE

Edit the app from the src folder, adding any necessary components and pages. Disease information powering the app is pulled from `src/assets/data.json`. Please maintain the structure of the json file when adding new diseases or removing previous ones.

--

## CONTRIBUTORS

This project was created through Institute of Politics <a href="https://www.uchicagotechteam.com/">Tech Team</a> at The University of Chicago for the Chicago Department of Public Health. Project management and technical development was led by Jiaqi Gao. User interface design was led by Yena Kim.

