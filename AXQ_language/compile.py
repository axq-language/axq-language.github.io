import sys
import platform
WORD="=~|`{+*}<>?_-^¥@\[\];:,/!\"#$%&\'"
def I_(long,result):
    if(long<len(result)):
        return True
    else:
        return False
lets=[]
boxs=[]
args = sys.argv[1:]
v=[]
v_mode=[]
v_count=0
def split_(code):
    words = []
    word = ""
    in_string = False
    escape = False
    for ch in code:
        # 文字列内
        if in_string:
            if ch == '\"' and not escape:
                if word:
                    words.append(word)
                    word = ""
                words.append('"')
                in_string = False
            else:
                word += ch
            if ch == '\\' and not escape:
                escape = True
            else:
                escape = False
            continue
        # 文字列開始
        if ch == '"':
            if word:
                words.append(word)
                word = ""
            words.append('"')
            in_string = True
            continue
        # 空白
        if ch.isspace():
            if word:
                words.append(word)
                word = ""
            continue
        # 記号
        if ch in WORD:
            if word:
                words.append(word)
                word = ""
            words.append(ch)
            continue
        word += ch
    if word:
        words.append(word)
    return words

if len(args)<2:
    print("Error: No file specified.", fie=sys.stderr)
    sys.exit(1)
with open(args[0],"r",encoding='utf-8') as f:
    lines=f.readlines()
with open("/Users/ryo/AXQ_language/main.txt","r",encoding='utf-8') as d:
    dat=d.read()
w=open(args[1],"w",encoding='utf-8')

for line in lines:
    result = split_(line)
    if(result[1]=='='):
        v.append(result[1])
        v_mode.append('f')
        v_count+=1
    elif(result[0]=="box"):
        #box a
        v.append(result[1])
        v_mode.append('b')
        v_count+=1

w.write("#include<stdio.h>\n#include<stdint.h>\n#include<math.h>\n#include <stdlib.h>\n#include <string.h>\n#include <signal.h>\n")
w.write(f"#define va {v_count}\n")
v__count=0
for ll in v:
    w.write(f"#define AXQ_{ll}_def_num {v__count}\n")
    v__count+=1
w.write('''
long *AXQ__start_ptrs[va];
long AXQ__start_ptrs_free[va];
long free_count=0;
''')

w.write(dat)
if platform.system()=="Darwin":
    for line in lines:
        result = split_(line)
        if(I_(2,result)):
            if(result[0]=='MAIN'):
                w.write('int main(int argc,char *argv){')
        if(I_(3,result)):
            if(result[1]=='='):
                if(result[0] not in v):
                    # a=[10]
                    # a=[[10],[10,20]]
                    w.write(f"long *{result[0]}=(long*)calloc(8,sizeof(long));\nif({result[0]}==NULL)")
                    w.write("{printf(\"error\\n\");")
                    w.write(f"AXQ__free_all(AXQ__start_ptrs, AXQ__start_ptrs_free);")
                    w.write("return 1;\n}\n")
                    w.write(f"uintptr_t *{result[0]}_ptr=(uintptr_t*)calloc(2,sizeof(uintptr_t));\n")
                    w.write(f"if({result[0]}_ptr==NULL)")
                    w.write("{\nprintf(\"error\\n\");\nAXQ__free_all(AXQ__start_ptrs, AXQ__start_ptrs_free);\nreturn 1;\n}else{\nAXQ__start_ptrs[")
                    w.write(f"AXQ_{result[0]}_def_num]=(long*){result[0]}_ptr;\nAXQ__start_ptrs_free[AXQ_{result[0]}_def_num]=0;\n")
                    w.write("}\n")
                    w.write(f'''
{result[0]}_ptr[1] = (uintptr_t){result[0]};
uintptr_t *{result[0]}_ptr_max={result[0]}_ptr;
AXQ__start_ptrs[0]=(long*){result[0]}_ptr;
AXQ__start_ptrs_free[0]=0;
''')
                    #準備完了
                    #a=[]の場合は何もしない。
                    #a="aaa"の時は上の階層に移動しない
                    #a=1の時は
                    # [10,20,30]->10,20,30
                    # [10,20,30,["100000"]]
                    # b = a[n - 1 : m]
                    if(result[2]=='['):
                        s = "".join(result[3:])
                    elif(result[2]=='"'):
                        s = "".join(result[2:])
                
                    # a=[~~~~~]
                else:
                    #a[0][1]=~~に限られる。
                    #もしも
                    #a=0  a[0]=0に変換
                    #a="aaaa" a[0]='a';a[1]='a'.....
                    #a[10][20]=0  そのまま
                    #a[10][20]="aaaa"  AXQ__string_change
                    #a
                
                

else:
    print("This is a compiler for Mac OS. \nPlease visit the installation website and download the version that matches your specific device.")
w.close()