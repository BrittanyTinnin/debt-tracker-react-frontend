  create_table "bills", force: :cascade do |t|
    t.text "name"
    t.text "phone_number"
    t.text "website"
    t.text "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "due_date"
  end

  <form onSubmit={event => this.handleSubmit(event)}>
    <p>
        <label>add todo</label>
        <input
            type="text"
            onChange={event => this.handleChange(event)}
            value={this.state.text}
        />
    </p>
    <input type="submit" />
</form>