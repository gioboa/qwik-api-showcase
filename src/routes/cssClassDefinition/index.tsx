import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const randomNumberSignal = useSignal<number>(Math.random);
  return (
    <div class="flex flex-col items-center">
      <div
        class={{
          "my-4 w-[300px] h-[300px]": true,
          "bg-red-600": randomNumberSignal.value > 0.5,
          "bg-blue-600": randomNumberSignal.value <= 0.5,
          "bg-green-600": randomNumberSignal.value <= 0.3,
        }}
      />
      <button
        class="my-4 text-black"
        onClick$={() => (randomNumberSignal.value = Math.random())}
      >
        Change color
      </button>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik APIs Showcase",
  meta: [
    {
      name: "description",
      content: "Qwik APIs Showcase",
    },
  ],
};
