#i/bin/sh


echo $#
echo $1

if [ "$#" eq "0" ]; then
	echo "input message!"
	exit 1;
fi;
git add -A
msg=$1
git commit -m "${msg}"
git push
