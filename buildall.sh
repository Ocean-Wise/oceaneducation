#!/bin/bash -e

#cd ChildrenAndYouth
#yarn bundle-js
#cd ../Curriculum
#yarn bundle-js
#cd ../GCSC
#yarn bundle-js
#cd ../Mobile
#yarn bundle-js
#cd ../Ocean
#yarn bundle-js
#cd ../Online
#yarn bundle-js
#cd ../Public
#yarn bundle-js
#cd ..

mkdir builds
cp ChildrenAndYouth/builds/ChildrenAndYouth.min.js builds
cp Curriculum/builds/Curriculum.min.js builds
cp GCSC/builds/GCSC.min.js builds
cp Mobile/builds/Mobile.min.js builds
cp Ocean/builds/Ocean.min.js builds
cp Online/builds/Online.min.js builds
cp Public/builds/Public.min.js builds

mkdir pages
cp ChildrenAndYouth/index.html pages/ChildrenAndYouth.html
cp Curriculum/index.html pages/Curriculum.html
cp GCSC/index.html pages/GCSC.html
cp Mobile/index.html pages/Mobile.html
cp Ocean/index.html pages/Ocean.html
cp Online/index.html pages/Online.html
cp Public/index.html pages/Public.html
