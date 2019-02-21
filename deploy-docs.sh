cd docs
rm -rf _book
gitbook build
cd _book
git init
git add -A
git commit -m 'update book'
