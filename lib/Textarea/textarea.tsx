
const Textarea = ({ ...props }: React.ComponentProps<"textarea">) => {
  return (
    <textarea
      {...props}
      className="h-full min-h-[100px] w-full resize-none rounded-sm border bg-transparent px-3 py-2.5 text-sm transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200  focus:border-2  dark:focus:border-foreground dark:border-foreground focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
    />

  )
}

export default Textarea