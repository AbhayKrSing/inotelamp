import os
import shutil
folder= os.listdir(os.getcwd())
for i in folder:
   if( os.path.exists(f'{i}/node_modules')):
       shutil.rmtree(f'{i}/node_modules')
