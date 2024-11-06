<template>
  <Toaster />
  <!-- 手風琴 -->
  <div class="m-20">
    <p class="text-fz16 mt-10">Accordion 手風琴</p>
    <hr class="my-10" />
    <p class="text-fz8 mt-10">訂閱取消與收費規則</p>
    <Accordion type="multiple" class="w-full" collapsible>
      <AccordionItem
        v-for="item in accordionItems"
        :key="item.value"
        :value="item.value"
      >
        <AccordionTrigger>
          {{ item.title }}
        </AccordionTrigger>
        <AccordionContent>
          {{ item.content }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
  <!-- 按鈕 -->
  <div class="m-20">
    <p class="text-fz16 mt-10">Button 按鈕</p>
    <hr class="my-10" />
    <p class="text-fz12 my-10">預設樣式</p>
    <div class="flex gap-10 justify-center">
      <Button>主色一般[default]</Button>
      <Button variant="secondary">次要顏色[secondary]</Button>
      <Button variant="destructive">刪除[destructive]</Button>
    </div>
    <hr class="my-10" />
    <p class="text-fz12 my-10">預設outline樣式</p>
    <div class="flex gap-10 justify-center">
      <Button variant="outline-primary">主色Outline[outline-primary]</Button>
      <Button variant="outline-secondary">
        次要Outline[outline-secondary]
      </Button>
      <Button variant="outline-destructive">
        刪除Outline[outline-destructive]
      </Button>
    </div>
    <hr class="my-10" />
    <p class="text-fz12 my-10">預設Link和ghost樣式(目前保留)</p>
    <div class="flex gap-10 justify-center">
      <Button variant="link">Link[link]</Button>
      <Button variant="ghost">ghost[ghost]</Button>
    </div>
    <hr class="my-10" />
    <p class="text-fz12 my-10">方形以及單純icon和icon+文字</p>
    <div class="flex gap-10 justify-center">
      <Button variant="icon">
        <ChevronRight class="w-4 h-4" />
      </Button>
      <Button variant="icon" size="icon">
        <ChevronRight class="w-4 h-4" />
        +文字
      </Button>
      <Button variant="icon" size="icon">文字</Button>
      <Button>
        <Mail class="w-4 h-4 mr-2" />
        Login with Email
      </Button>
    </div>
    <hr class="my-10" />
    <p class="text-fz12 mt-10">按鈕大小</p>
    <div class="flex gap-10 justify-center my-10">
      <Button size="default">default [12 15]</Button>
      <Button size="mini">size mini[5 10]</Button>
      <Button size="sm">size sm [12 24]</Button>
      <Button size="lg">size lg [12 32]</Button>
      <Button size="icon">size icon[8]</Button>
      <Button size="square">size square [10]</Button>
    </div>
    <div class="flex gap-10 justify-center">
      <Button size="full">size full [full]</Button>
    </div>
    <hr class="my-10" />
    <p class="text-fz12 mt-10">分頁按鈕</p>
    <Pagination
      v-slot="{ page }"
      :total="100"
      :sibling-count="1"
      show-edges
      :default-page="2"
    >
      <PaginationList v-slot="{ items }" class="flex items-center gap-1">
        <PaginationFirst />
        <PaginationPrev />

        <template v-for="(item, index) in items">
          <PaginationListItem
            v-if="item.type === 'page'"
            :key="index"
            :value="item.value"
            as-child
          >
            <Button
              size="pagination"
              :variant="item.value === page ? 'paginationActive' : 'pagination'"
            >
              {{ item.value }}
            </Button>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type" :index="index" />
        </template>

        <PaginationNext />
        <PaginationLast />
      </PaginationList>
    </Pagination>
  </div>
  <!-- 複選框 -->
  <div class="m-20">
    <p class="text-fz16 mt-10">Checkbox 複選框</p>
    <hr class="my-10" />
    <div class="flex items-center space-x-2 gap-10 justify-center my-10">
      <Checkbox id="terms" />
      <label
        for="terms"
        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none"
      >
        我同意
      </label>
    </div>
  </div>
  <div class="m-20">
    <p class="text-fz16 mt-10">Checkbox 複選框</p>
    <hr class="my-10" />
    <div class="flex items-center space-x-2 gap-10 justify-center my-10">
      <!-- 如果是全選按鈕 傳入參數 -->
      <div class="flex items-center space-x-2 gap-10">
        <Checkbox
          :id="'select-all'"
          :checked="isAnyCheckboxChecked"
          @update:checked="toggleAllCheckbox()"
          :variant="isAllCheckboxOpen ? 'selectAll' : ''"
        />
        <label
          for="select-all"
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none"
        >
          全選
        </label>
      </div>
      <div
        v-for="index in 10"
        :key="index"
        class="flex items-center space-x-2 gap-10"
      >
        <Checkbox
          :id="'test-' + index"
          :checked="checkboxStates[index - 1]"
          @update:checked="toggleIndividualCheckbox(index - 1)"
        />
        <label
          :for="'test-' + index"
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none"
        >
          我同意 {{ index }}
        </label>
      </div>
    </div>
  </div>
  <!-- 模組(可關閉靜態背景) -->
  <div class="m-20">
    <p class="text-fz16 mt-10">Dialog 模組(可關閉靜態背景)</p>
    <p>這邊模組只有更動DialogTitle DialogContent</p>
    <hr class="my-10" />
    <!-- 桌機版 24 20 -->
    <Button @click="toggleDialogOpen()">
      另外的按鈕DialogTrigger Open [桌機版 24 20]
    </Button>
    <Dialog v-model:open="isDialogOpen">
      <DialogTrigger as-child>
        <Button>透過DialogTrigger Open [桌機版 24 20]</Button>
      </DialogTrigger>
      <!-- 這邊可以去找tailwind的max width部分，去設置最大寬 -->
      <DialogContent class="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            請不用在DialogContent加入variant 它會自動吃default
          </DialogTitle>
          <DialogDescription>
            DialogDescription是對話框描述，可用可不用
          </DialogDescription>
        </DialogHeader>
        <div class="flex items-center space-x-2">
          我是內容
          這邊我沒有強制做什麼css更動，可在這邊直接使用div放自己所負責的專案modal內容
        </div>
        <DialogFooter class="sm:justify-start">
          <div class="flex flex-col">
            <hr />
            footer也可以任意放自己所需的內容，如不需要footer可不用DialogFooter
            <DialogClose as-child>
              <Button type="button" variant="secondary">取消</Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    <!-- 手機版 20 20 -->
    <Dialog>
      <DialogTrigger as-child>
        <Button>透過DialogTrigger Open [手機版 20 20]</Button>
      </DialogTrigger>
      <DialogContent variant="secondary" class="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>請在DialogContent加入variant="secondary"</DialogTitle>
          <DialogDescription>
            DialogDescription是對話框描述，可用可不用
          </DialogDescription>
        </DialogHeader>
        <div class="flex items-center space-x-2">我是內容</div>
        <DialogFooter>
          <DialogClose as-child>
            <Button type="button" variant="secondary">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
  <!-- 模組(不可關閉靜態背景) -->
  <div class="m-20">
    <p class="text-fz16 mt-10">Alert Dialog 模組(不可關閉靜態背景)</p>
    <p>這邊模組只有更動AlertDialogTitle AlertDialogContent</p>
    <hr class="my-10" />
    <!-- 桌機版 24 20 -->
    <AlertDialog>
      <AlertDialogTrigger as-child>
        <Button>AlertDialogTrigger Open [桌機版 24 20]</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            AlertDialogContent 它會自動吃default
          </AlertDialogTitle>
          <AlertDialogDescription>
            DialogDescription是對話框描述，可用可不用
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div class="flex items-center space-x-2">
          我是內容
          這邊我沒有強制做什麼css更動，可在這邊直接使用div放自己所負責的專案modal內容
        </div>
        <AlertDialogFooter>
          <div class="flex flex-col">
            <hr />
            footer也可以任意放自己所需的內容，如不需要footer可不用DialogFooter
            <div class="flex justify-end">
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </div>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    <!-- 手機版 20 20 -->
    <AlertDialog>
      <AlertDialogTrigger as-child>
        <Button variant="secondary">
          AlertDialogTrigger Open [手機版 20 20]
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent variant="secondary">
        <AlertDialogHeader>
          <AlertDialogTitle>
            請在AlertDialogContent加入variant="secondary"
          </AlertDialogTitle>
          <AlertDialogDescription>
            DialogDescription是對話框描述，可用可不用
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
  <!-- 表單 -->
  <div class="m-20">
    <p class="text-fz16 mt-10">Form 表單</p>
    <hr class="my-10" />
    <form class="w-2/3 space-y-6" @submit="onSubmit">
      <FormField v-slot="{ componentField }" name="username">
        <FormItem>
          <!-- 這邊我自己設定如果這是必填的部分，只要在label加入required，就會自動幫你產生* -->
          <!-- 如果你傳遞 description，像是經銷商的個人帳號設置 就有描述，可以傳遞description="文字"，那會在label後面拿到剛剛打的文字 -->
          <FormLabel required description="(建議尺寸:600*230px)">
            名字
          </FormLabel>
          <FormControl>
            <Input type="text" placeholder="shadcn" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit">Submit</Button>
    </form>
  </div>
  <!-- 路由 -->
  <div class="m-20">
    <p class="text-fz16 mt-10">Router 路由</p>
    <hr class="my-10" />
    <!-- 直接使用 Collapsible 和 CollapsibleContent -->
    <!-- 參考 https://www.shadcn-vue.com/blocks.html#Sidebar07 -->
    <!-- 目前暫時用 <a>標籤，之後我會改可以使用 router-view -->
    <p>桌機版路由</p>
    <Collapsible
      v-for="item in data.navMain"
      :key="item.title"
      as-child
      class="group/collapsible"
    >
      <CollapsibleTrigger as-child>
        <button class="menu-button flex gap-8" :tooltip="item.title">
          <component :is="item.icon" />
          <span>{{ item.title }}</span>
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent v-for="subItem in item.items" :key="subItem.id">
        <a :href="subItem.url">
          <span>{{ subItem.title }}</span>
        </a>
      </CollapsibleContent>
    </Collapsible>
    <p class="mt-20">手機版路由</p>
    <Collapsible
      v-for="item in data.navMain"
      :key="item.title"
      as-child
      class="group/collapsible"
      variant="secondary"
    >
      <CollapsibleTrigger as-child>
        <button class="menu-button flex gap-8" :tooltip="item.title">
          <component :is="item.icon" />
          <span>{{ item.title }}</span>
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent v-for="subItem in item.items" :key="subItem.id">
        <a :href="subItem.url">
          <span>{{ subItem.title }}</span>
        </a>
      </CollapsibleContent>
    </Collapsible>
  </div>
  <div class="m-20">
    <p class="text-fz16 mt-10">側邊欄打開</p>
    <hr class="my-10" />
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent :backgroundImageClass="'bg-[url(@/assets/mask.png)]'">
        <Collapsible
          v-for="item in data.navMain"
          :key="item.title"
          as-child
          class="group/collapsible"
          variant="secondary"
        >
          <CollapsibleTrigger as-child>
            <button class="menu-button flex gap-8" :tooltip="item.title">
              <component :is="item.icon" />
              <span>{{ item.title }}</span>
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent v-for="subItem in item.items" :key="subItem.id">
            <a :href="subItem.url">
              <span>{{ subItem.title }}</span>
            </a>
          </CollapsibleContent>
        </Collapsible>
      </SheetContent>
    </Sheet>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-vue-next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
// The <Form /> component is a wrapper around the vee-validate library.
// 該<Form />元件是庫的包裝器vee-validate
import { toTypedSchema } from '@vee-validate/zod';
// Use the useForm composable from vee-validate or use <Form /> component to create a form.
// 使用 vee-validate 中的 useForm 可組合項目或使用 <Form /> 元件來建立表單。
import { useForm } from 'vee-validate';
import { h, ref } from 'vue';
import * as z from 'zod'; //表單驗證
import { Toaster } from '@/components/ui/toast';
import { useToast } from '@/components/ui/toast/use-toast';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from '@/components/ui/pagination';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
// 參考 https://vueuse.org/shared/useToggle/#usetoggle
import { useToggle } from '@vueuse/core';
const [isDialogOpen, toggleDialogOpen] = useToggle();

// checkbox邏輯
const isAllCheckboxOpen = ref(false); //全選
const isAnyCheckboxChecked = ref(false); //單一複選框和全選的判斷
const checkboxStates = ref(Array(10).fill(false)); //將每個單一複選框設置狀態

// 全選的狀態
const toggleAllCheckbox = () => {
  // 全選可做切換
  isAllCheckboxOpen.value = !isAllCheckboxOpen.value;
  // 如果 全選和單一複選框為真 (全部選取的狀態)
  if (isAllCheckboxOpen.value && checkboxStates.value) {
    // 單一複選框和全選的判斷和將每個單一複選框設置狀態都設false
    isAnyCheckboxChecked.value = false;
    checkboxStates.value = Array(10).fill(false);
  } else {
    // 如果不是 代表按下全選後，都設定為真
    isAnyCheckboxChecked.value = true;
    checkboxStates.value = Array(10).fill(true);
  }
};
// 單個複選框狀態
const toggleIndividualCheckbox = (index) => {
  // 每個複選框透過index設置狀態
  checkboxStates.value[index] = !checkboxStates.value[index];
  // 檢查每個單一複選框的值是否都為false
  if (checkboxStates.value.every((state) => !state)) {
    // 如果是的話則將全選取消掉true的狀態
    isAllCheckboxOpen.value = false;
  } else {
    // 如果有任何一個單一複選框為true，則將全選和單一複選框和全選的判斷打開
    isAllCheckboxOpen.value = true;
    isAnyCheckboxChecked.value = true;
  }
};
const { toast } = useToast();
const isOpen = ref(false);
const backgroundImageClass = ref('bg-[url(@/assets/mask.png)]');
// const checkedValues = ref<boolean[]>(new Array(10).fill(false)); //模擬有10個checkbox
// const selectAll = ref(false); //一開始設置 false 不全選
// const toggleAllCheckboxes = () => {
//   // console.log(selectAll.value);
//   selectAll.value = !selectAll.value; //這邊去切換是否要全選
//   if (selectAll.value) {
//     checkedValues.value = new Array(10).fill(true); //如果是則所有都要設為true
//   } else {
//     checkedValues.value = new Array(10).fill(false);
//   }
// };
// import { useAsyncState, whenever } from '@vueuse/core';
// const { state, isReady } = useAsyncState(
//   fetch('https://jsonplaceholder.typicode.com/todos/1').then((t) => t.json()),
//   {}
// );

// whenever(isReady, () => console.log(state));
// // 可以單獨選取
// const updateIndividualCheckbox = (index: number) => {
//   checkedValues.value[index] = !checkedValues.value[index];
// };
// 手風琴
const accordionItems = [
  {
    value: 'item-1',
    title: '如果系統停止收取會費',
    content:
      '除非您重新啟用帳戶，否則系統不會再向您收費。 取消時，若收費週期內還有剩餘天數，您仍可繼續使用 未來裝修圖說，您的帳戶將在收費週期結束時自動取消。',
  },
  {
    value: 'item-2',
    title: '如何取消訂閱？',
    content:
      '如需取消訂閱，請直接點擊本頁上方的「取消訂閱」文字即可完成，或 點擊這裡 跳轉至取消訂閱區塊。取消後，您仍可使用服務至計費週期結束。',
  },
  {
    value: 'item-3',
    title: '在持有優惠點數的情況下取消',
    content:
      '取消後，您仍可繼續使用 未來裝修圖說優惠點數 使用 未來裝修圖說，直到餘額用畢為止。 餘額用完後，您就不能再使用 未來裝修圖說。',
  },
  {
    value: 'item-4',
    title: '重新加入 未來裝修圖說',
    content: '您隨時可以 重新啟用未來裝修圖說帳戶',
  },
];
// 表單
const formSchema = toTypedSchema(
  z.object({
    username: z
      // 這邊可以蓋掉vee-validate/zod 預設的 Required
      .string({
        required_error: '我會蓋掉Required',
      })
      // 這邊開始都可以再繼續自定義錯誤訊息
      .min(2, {
        message: '輸入小於2字元會錯誤訊息',
      })
      .max(8, {
        message: '輸入超過8個字會錯誤訊息',
      }),
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((values) => {
  console.log('12');
  toast({
    title: 'You submitted the following values:',
    description: h(
      'pre',
      { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))
    ),
  });
});

// 路由的
import {
  AudioWaveform,
  BookOpen,
  Bot,
  ChevronRight,
  Command,
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
} from 'lucide-vue-next';
const data = {
  navMain: [
    {
      title: 'Playground',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'History',
          url: '#',
        },
        {
          title: 'Starred',
          url: '#',
        },
        {
          title: 'Settings',
          url: '#',
        },
      ],
    },
    {
      title: 'Models',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Genesis',
          url: '#',
        },
        {
          title: 'Explorer',
          url: '#',
        },
        {
          title: 'Quantum',
          url: '#',
        },
      ],
    },
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
        {
          title: 'Get Started',
          url: '#',
        },
        {
          title: 'Tutorials',
          url: '#',
        },
        {
          title: 'Changelog',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
};
</script>

<style></style>
