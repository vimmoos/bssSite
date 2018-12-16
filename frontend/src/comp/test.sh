C=0
while IFS=" " read a b c d e f g h targ; do
    echo "import img$C from './audio/$targ'"
    C=$(($C+1))
done
