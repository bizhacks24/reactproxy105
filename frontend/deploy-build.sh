echo "Switching to branch master ..."
echo ""
echo ""

git checkout master

echo "Start Building the App now..., thru npm run build ..."

#npm run build --prefix ./client/
npm run build  ./

echo "Deploying build files to VPS SERVER"
echo ""
echo ""

#scp -r ./client/build/* root@62.72.29.245:/var/www/lockheedhr/

scp -r build/* root@62.72.29.245:/var/www/reactloyproxy




echo ""
echo ""
echo "Done!"



